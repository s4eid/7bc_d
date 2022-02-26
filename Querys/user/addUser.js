import { hash } from "bcrypt";
import { ApolloError } from "apollo-server-errors";
export const addUser = async (
  full_name,
  email,
  password,
  phone_number,
  pool
) => {
  try {
    const exist = await pool.query(`SELECT email FROM users WHERE email=$1`, [
      email,
    ]);
    if (!exist.rows[0]) {
      const _password = await hash(password, 10);
      const data = await pool.query(
        "INSERT INTO users (full_name,email,password,phone_number) VALUES ($1,$2,$3,$4) RETURNING *",
        [full_name, email, _password, phone_number]
      );
      return data.rows[0];
    } else {
      return new ApolloError("user exist!!!");
    }
  } catch (error) {
    console.log(error);
  }
};
