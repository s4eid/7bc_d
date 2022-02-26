export const getAdmins = async (pool) => {
  try {
    const data = await pool.query("SELECT * FROM admin");
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
