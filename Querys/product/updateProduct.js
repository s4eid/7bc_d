export const addProduct = async (
  name,
  price,
  admin_id,
  type,
  width,
  height,
  origin,
  age,
  family,
  main_color,
  description,
  weight,
  pieces,
  img_1,
  img_2,
  img_3,
  percent,
  active,
  discount_name,
  pool
) => {
  try {
    const data = await pool.query(
      `
      INSERT INTO product(name,price,admin_id,type) VALUES($1,$2,$3,$4) RETURNING *
      `,
      [name, price, admin_id, type]
    );
    const product_id = data.rows[0].product_id;
    await pool.query(
      `
      INSERT INTO product_details(width,height,origin,age,family,description,weight,main_color,product_id)
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)
      `,
      [
        width,
        height,
        origin,
        age,
        family,
        description,
        weight,
        main_color,
        product_id,
      ]
    );
    await pool.query(
      `
      INSERT INTO product_img(img_1,img_2,img_3,product_id)
       VALUES($1,$2,$3,$4)
      `,
      [img_1, img_2, img_3, product_id]
    );
    await pool.query(
      `
      INSERT INTO product_discount(percent,active,discount_name,product_id)
       VALUES($1,$2,$3,$4)
      `,
      [percent, active, discount_name, product_id]
    );
    await pool.query(
      `
      INSERT INTO product_inventory(pieces,product_id)
       VALUES($1,$2)
      `,
      [pieces, product_id]
    );
    return data.rows[0];
  } catch (error) {
    console.log(error);
  }
};
