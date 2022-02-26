export const getUsers = async (pool) => {
  try {
    const data = await pool.query(
      `SELECT u.user_id,u.full_name,u.email,u.password,u.created_at,u.phone_number,u.refresh_token,p.user_payment_id,
      p.owner,p.cart_number,p.expire_m,p.expire_y,p.cvv,p.company,a.user_address_id,a.address,a.country,a.city,a.area,a.zip_code,a.ip 
      FROM users u LEFT JOIN user_payment p ON u.user_id=p.user_id FULL JOIN user_address a ON u.user_id=a.user_id`
    );
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
