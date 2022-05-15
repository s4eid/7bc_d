export const getOrder = async (order_id, pool) => {
  try {
    const order = await pool.query(
      `
select o.order_id,o.status,o.created_at,s.address,s.shipping_price,
s.country,s.city,s.area,s.zip_code,s.phone_number,s.ip,s.company,p.currency,
p.paid_price,p.price,p.card_number,p.cvv,p.expire_m,p.expire_y,
p.owner,p.card_association,p.card_family,p.card_type,p.fraud_status,p.iyzico_commission_fee,
p.iyzico_commission_rate,u.email,u.name
from orders o left join order_shipping s on o.order_id=s.order_id
 left join order_payment 
p on o.order_id=p.order_id left join users u on o.user_id=u.user_id where o.order_id=$1
 `,
      [order_id]
    );
    const order_items = await pool.query(
      `select o.product_id,o.quantity,o.paid_price,p.img_1 from order_items o inner join product_img p on o.product_id=p.product_id where order_id=$1`,
      [order_id]
    );
    const orderResult = {
      order_items: order_items.rows,
      order_info: order.rows[0],
    };
    return orderResult;
  } catch (error) {
    console.log(error);
  }
};
