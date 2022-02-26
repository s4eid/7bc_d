import { getProducts } from "../../Querys/product/getProducts";
import { addProduct } from "../../Querys/product/addProduct";
import { deleteProduct } from "../../Querys/product/deleteProduct";
import { getOneProduct } from "../../Querys/product/getOneProduct";

const resolverProduct = {
  Query: {
    async products(_, __, { pool }) {
      const data = await getProducts(pool);
      return data;
    },
    async product(_, { product_id }, { pool }) {
      const data = await getOneProduct(product_id, pool);
      return data;
    },
  },

  Mutation: {
    async addProduct(
      _,
      {
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
        img1_id,
        img_2,
        img2_id,
        img_3,
        img3_id,
        // percent,
        // active,
        // discount_name,
      },
      { pool }
    ) {
      const data = await addProduct(
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
        img1_id,
        img_2,
        img2_id,
        img_3,
        img3_id,
        // percent,
        // active,
        // discount_name,
        pool
      );
      return data;
    },
    async deleteProduct(_, { product_id }, { pool }) {
      const data = await deleteProduct(product_id, pool);
      return data;
    },
  },
};
export default resolverProduct;
