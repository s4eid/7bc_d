import { ApolloError } from "apollo-server-errors";
import { compare } from "bcrypt";
import {
  jwtGenerate,
  jwtGenerateAccess,
} from "../../Functions/jwtGen/jwtGenerate";
import cookie from "cookie";
import { ERROR_CODES } from "../../errorCodes/errorCodes";

export const loginAdmin = async (email, password, token, res, pool) => {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
    {
      method: "POST",
    }
  );
  const data = await response.json();
  if (!data.success) {
    return new ApolloError("Login Failed!", ERROR_CODES.LOGIN);
  }
  const exist = await pool.query("SELECT * FROM admin WHERE email=$1", [email]);
  if (!exist.rows[0]) {
    return new ApolloError("Login Failed!", ERROR_CODES.LOGIN);
  }
  const _password = exist.rows[0].password;
  const confrimPass = await compare(password, _password);
  if (confrimPass === false) {
    return new ApolloError("Login Failed!", ERROR_CODES.LOGIN);
  }
  const name = exist.rows[0].name;
  const admin_id = exist.rows[0].admin_id;
  try {
    const refresh = await jwt.verify(
      exist.rows[0].refresh_token,
      process.env.REFRESH_TOKEN
    );
    const { accessToken } = await jwtGenerateAccess(email, name, admin_id);
    const refreshC = cookie.serialize(
      "refreshToken",
      exist.rows[0].refresh_token,
      {
        secure: process.env.NODE_ENV === "production",
        path: "/",
        // sameSite: "lax",
        sameSite: "strict",
        maxAge: 60 * 60 * 24,
      }
    );
    const accessC = cookie.serialize("accessToken", accessToken, {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60,
    });
    res.setHeader("Set-Cookie", [refreshC, accessC]);
    return "done";
  } catch (error) {
    const { accessToken, refreshToken } = await jwtGenerate(
      email,
      name,
      admin_id
    );
    await pool
      .query("UPDATE admin SET refresh_token=$1 WHERE admin_id=$2", [
        refreshToken,
        admin_id,
      ])
      .then(() => {
        const refreshC = cookie.serialize("refreshToken", refreshToken, {
          secure: process.env.NODE_ENV === "production",
          path: "/",
          // sameSite: "lax",
          sameSite: "strict",
          maxAge: 60 * 60 * 24,
        });
        const accessC = cookie.serialize("accessToken", accessToken, {
          secure: process.env.NODE_ENV === "production",
          sameSite: "strict",
          path: "/",
          maxAge: 60 * 60,
        });
        res.setHeader("Set-Cookie", [refreshC, accessC]);
        return "done";
      })
      .catch((error) => {
        return new ApolloError("Login Failed!", ERROR_CODES.LOGIN);
      });
  }
};
