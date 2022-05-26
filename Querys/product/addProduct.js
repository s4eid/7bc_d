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
  made,
  material,
  shape,
  img_1,
  img1_id,
  img_2,
  img2_id,
  img_3,
  img3_id,
  // percent,
  // active,
  // discount_name,
  pool
) => {
  try {
    const data = await pool.query(
      `
      INSERT INTO product(name,price,admin_id,type,made) VALUES($1,$2,$3,$4,$5) RETURNING product_id
      `,
      [name, price, admin_id, type, made]
    );
    const product_id = data.rows[0].product_id;
    await pool.query(
      `
      INSERT INTO product_details(width,height,origin,age,family,description,weight,main_color,material,shape,product_id)
      VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
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
        material,
        shape,
        product_id,
      ]
    );
    await pool.query(
      `
      INSERT INTO product_img(img_1,img1_id,img_2,img2_id,img_3,img3_id,product_id)
       VALUES($1,$2,$3,$4,$5,$6,$7)
      `,
      [img_1, img1_id, img_2, img2_id, img_3, img3_id, product_id]
    );
    // await pool.query(
    //   `
    //   INSERT INTO product_discount(percent,active,discount_name,product_id)
    //    VALUES($1,$2,$3,$4)
    //   `,
    //   [percent, active, discount_name, product_id]
    // );
    await pool.query(
      `
      INSERT INTO product_inventory(pieces,product_id)
       VALUES($1,$2)
      `,
      [pieces, product_id]
    );
    return "done";
  } catch (error) {
    console.log(error);
  }
};
