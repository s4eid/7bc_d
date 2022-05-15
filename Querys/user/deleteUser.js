export const deleteUser = async (user_id, pool) => {
  try {
    await pool.query(`DELETE FROM user_payment WHERE user_id=$1`, [user_id]);
    await pool.query(`DELETE FROM user_address WHERE user_id=$1`, [user_id]);
    await pool.query(`DELETE FROM users WHERE user_id=$1`, [user_id]);
    return "done";
  } catch (error) {
    console.log(error);
  }
};
