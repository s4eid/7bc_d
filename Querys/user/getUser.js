export const getUser = async (user_id, pool) => {
  try {
    const data = await pool.query(
      `
      SELECT a.user_id,a.name,a.email,
      a.verified,address,b.phone_number,country,city,area,zip_code,ip,owner,card_number,
       expire_m,expire_y,cvv,card_family,card_type,card_association
       FROM users a LEFT JOIN user_address
       b ON a.user_id=b.user_id LEFT JOIN user_payment
        c ON a.user_id=c.user_id WHERE
	 a.user_id=$1`,
      [user_id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};
