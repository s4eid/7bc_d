import { ApolloError } from "apollo-server-errors";

export const addUser_payment = async (
  owner,
  cart_number,
  expire_m,
  expire_y,
  type,
  cvv,
  company,
  user_id,
  pool
) => {
  try {
    const exist = await pool.query(
      `SELECT user_id FROM user_payment WHERE user_id=$1`,
      [user_id]
    );
    if (!exist.rows[0]) {
      const data = await pool.query(
        "INSERT INTO user_payment (owner,cart_number,expire_m,expire_y,type,cvv,company,user_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
        [owner, cart_number, expire_m, expire_y, type, cvv, company, user_id]
      );
      return data.rows[0];
    } else {
      return new ApolloError("Payment infos are exist!!!");
    }
  } catch (error) {
    console.log(error);
  }
};
