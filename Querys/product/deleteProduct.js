import cloudinary from "cloudinary";
export const deleteProduct = async (product_id, pool) => {
  try {
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
    const images = await pool.query(
      `
      DELETE FROM product_img WHERE product_id=$1  
      `,
      [product_id]
    );
    const img = images.rows[0];
    const data = await pool.query(
      `
      DELETE FROM product WHERE product_id=$1 
      `,
      [product_id]
    );
    await cloudinary.v2.api.delete_resources(
      [img.img_1, img.img_2, img.img_3],
      function (error, result) {
        console.log(result, error);
      }
    );
    return "done";
  } catch (error) {
    console.log(error);
  }
};
