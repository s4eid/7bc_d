export const editProduct = async (
  product_id,
  name,
  price,
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
  pool
) => {
  try {
    const data = await pool.query(
      "UPDATE product SET name=$1,price=$2,type=$3 WHERE product_id=$4 RETURNING *",
      [name, price, type, product_id]
    );
    await pool.query(
      "UPDATE product_details SET width=$1,height=$2,origin=$3,age=$4,family=$5,description=$6,weight=$7,main_color=$8 WHERE product_id=$9",
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
      "UPDATE product_inventory SET pieces=$1 WHERE product_id=$2",
      [pieces, product_id]
    );
    return data.rows[0];
  } catch (error) {}
};
