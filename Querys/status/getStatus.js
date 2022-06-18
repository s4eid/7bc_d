export const getStatus = async (pool) => {
  try {
    const completeOrders = await pool.query(
      `
       select count(order_id) from orders where status='3';
      `
    );
    const waitingOrders = await pool.query(
      `
      select count(order_id) from orders where status='0' or status='1'
      `
    );
    const clients = await pool.query(
      `
      select count(user_id) from users
      `
    );
    const admins = await pool.query(
      `
      select count(admin_id) from admin
      `
    );
    const recentOrders = await pool.query(
      `
      select o.order_id,p.paid_price,u.email from orders o left join order_payment p on o.order_id=p.order_id left join users u on o.user_id=u.user_id order by o.created_at desc limit 3
      `
    );
    const recentMonths = await pool.query(
      `
       SELECT
 DATE_TRUNC('month',created_at)
          AS  month,
        COUNT(order_id) AS count
 FROM orders
GROUP BY DATE_TRUNC('month',created_at);
      `
    );
    const data = {
      completeOrders: completeOrders.rows[0].count,
      waitingOrders: waitingOrders.rows[0].count,
      clients: clients.rows[0].count,
      admins: admins.rows[0].count,
      recentOrders: recentOrders.rows,
      recentMonths: recentMonths.rows,
    };
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
