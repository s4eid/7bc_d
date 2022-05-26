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
  made,
  material,
  shape,
  pool
) => {
  try {
    await pool.query(
      "UPDATE product SET name=$1,price=$2,type=$3,made=$4 WHERE product_id=$5",
      [name, price, type, made, product_id]
    );
    await pool.query(
      "UPDATE product_details SET width=$1,height=$2,origin=$3,age=$4,family=$5,description=$6,weight=$7,main_color=$8,material=$9,shape=$10 WHERE product_id=$11",
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
      "UPDATE product_inventory SET pieces=$1 WHERE product_id=$2",
      [pieces, product_id]
    );
    return "done";
  } catch (error) {}
};
