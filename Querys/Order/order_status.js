import sendGrid from "../../emailConfig";
import { order_update_shipping } from "../../emailTemplates/order_update_shipping";
import { order_update_delivered } from "../../emailTemplates/order_update_delivered";

export const order_status = async (order_id, email, status, pool) => {
  try {
    await pool.query(`update orders set status=$1 where order_id=$2`, [
      status,
      order_id,
    ]);
    const url = `${process.env.URL}/orders/${order_id}`;
    if (status === 1) {
      const page = order_update_shipping(url);
      const message = {
        to: email,
        from: {
          email: "saeid.noormohammad@gmail.com",
          name: "saeid noormohammad",
        },
        subject: `New Information About Your Order In 7bc.com`,
        html: `${page}`,
        // text: `Your Products Are In Shipping Section!`,
      };
      await sendGrid.send(message);
      return "done";
    }
    if (status === 3) {
      const page = order_update_delivered(url);
      const message = {
        to: email,
        from: {
          email: "saeid.noormohammad@gmail.com",
          name: "saeid noormohammad",
        },
        subject: `New Information About Your Order In 7bc.com`,
        html: `${page}`,
        // text: `Your Products Are In Shipping Section!`,
      };
      await sendGrid.send(message);
      return "done";
    }
  } catch (error) {
    console.log(error);
  }
};
