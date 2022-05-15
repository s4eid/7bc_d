export const deleteOrder = async (order_id, pool) => {
  try {
    await pool.query(`delete from order_items where order_id=$1`, [order_id]);
    await pool.query(`delete from order_payment where order_id=$1`, [order_id]);
    await pool.query(`delete from order_shipping where order_id=$1`, [
      order_id,
    ]);
    await pool.query(`delete from orders where order_id=$1`, [order_id]);
    return "done";
  } catch (error) {
    console.log(error);
  }
};
