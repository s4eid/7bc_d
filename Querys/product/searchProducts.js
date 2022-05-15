export const searchProducts = async (text, pool) => {
  try {
    const data = await pool.query(
      `
      select p.name,p.product_id,p.type,i.img_1 from product p left join product_img i on p.product_id=i.product_id where document @@ plainto_tsquery($1) order by ts_rank(document,plainto_tsquery($1)) limit 5
	    `,
      [text]
    );
    return data.rows;
  } catch (error) {
    console.log(error);
  }
};
