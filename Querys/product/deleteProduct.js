export const deleteProduct = async (product_id, pool) => {
  try {
    // const data = await pool.query(`SELECT * FROM product`);
    // const another = await pool.query(
    //   `SELECT * FROM product_img WHERE product_id=$1`,
    //   [product_id]
    // );
    // console.log(another.rows[0]);
    await pool.query(
      `
      DELETE FROM product_details WHERE product_id=$1
      `,
      [product_id]
    );
    await pool.query(
      `
      DELETE FROM product_inventory WHERE product_id=$1
      `,
      [product_id]
    );
    await pool.query(
      `
      DELETE FROM product_discount WHERE product_id=$1
      `,
      [product_id]
    );
    await pool.query(
      `
      DELETE FROM product_img WHERE product_id=$1
      `,
      [product_id]
    );
    const data = await pool.query(
      `
      DELETE FROM product WHERE product_id=$1 RETURNING *
      `,
      [product_id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};
