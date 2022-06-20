import { sign } from "jsonwebtoken";

export const jwtGenerate = async (email, name, admin_id) => {
  const accessToken = await sign(
    { email, name, admin_id },
    process.env.ACCESS_TOKEN,
    { expiresIn: "1h" }
  );
  const refreshToken = await sign(
    { email, name, admin_id },
    process.env.REFRESH_TOKEN,
    { expiresIn: "1d" }
  );
  return { accessToken, refreshToken };
};
export const jwtGenerateAccess = async (email, name, admin_id) => {
  const accessToken = await sign(
    { email, name, admin_id },
    process.env.ACCESS_TOKEN,
    { expiresIn: "1h" }
  );
  return { accessToken };
};
