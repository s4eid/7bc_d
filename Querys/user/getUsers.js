export const getUsers = async (pool) => {
  try {
    const data = await pool.query(
      `SELECT user_id,name,email,verified
      FROM users`
    );
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
