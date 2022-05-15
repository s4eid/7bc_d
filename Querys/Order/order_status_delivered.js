import sendGrid from "../../emailConfig";
export const order_status_shipping = async (order_id, email, pool) => {
  try {
    const order = await pool.query(
      `update orders set status=$1 where order_id=$2 returning order_id`,
      [3, order_id]
    );
    const message = {
      to: email,
      from: {
        email: "saeid.noormohammad@gmail.com",
        name: "saeid noormohammad",
      },
      subject: `New Information About Your Order In 7bc.com`,
      text: `Your Products Are In Shipping Section!`,
    };
    await sendGrid.send(message);
    return "done";
  } catch (error) {
    console.log(error);
  }
};
