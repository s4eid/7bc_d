import { hash } from "bcrypt";

export const addAdmin = async (
  full_name,
  email,
  password,
  phone_number,
  pool
) => {
  try {
    const _password = await hash(password, 10);
    const data = await pool.query(
      "INSERT INTO admin (full_name,email,password,phone_number) VALUES ($1,$2,$3,$4) RETURNING *",
      [full_name, email, _password, phone_number]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};
