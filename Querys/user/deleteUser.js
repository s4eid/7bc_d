export const deleteUser = async (user_id, pool) => {
  try {
    await pool.query(`DELETE FROM user_payment WHERE user_id=$1`, [user_id]);
    await pool.query(`DELETE FROM user_address WHERE user_id=$1`, [user_id]);
    const data = await pool.query(
      `DELETE FROM users WHERE user_id=$1 RETURNING *`,
      [user_id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};
