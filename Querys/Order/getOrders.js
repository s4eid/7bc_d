export const getOrders = async (pool) => {
  try {
    const data = await pool.query(
      `select o.status,o.created_at,o.order_id,p.paid_price,u.email from orders o left join order_payment p 
      on o.order_id=p.order_id left join users u on o.user_id=u.user_id order by created_at desc`
    );
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
