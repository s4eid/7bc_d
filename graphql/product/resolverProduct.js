import { getProducts } from "../../Querys/product/getProducts";
import { addProduct } from "../../Querys/product/addProduct";
import { deleteProduct } from "../../Querys/product/deleteProduct";
import { getOneProduct } from "../../Querys/product/getOneProduct";
import { editProduct } from "../../Querys/product/editProduct";
import { searchProducts } from "../../Querys/product/searchProducts";

const resolverProduct = {
  Query: {
    async products(_, { type, first, afterCursor }, { pool }) {
      const data = await getProducts(type, first, afterCursor, pool);
      return data;
    },
    async product(_, { product_id }, { pool }) {
      const data = await getOneProduct(product_id, pool);
      return data;
    },
    async searchProduct(_, { text }, { pool }) {
      const data = await searchProducts(text, pool);
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
        made,
        material,
        shape,
        img_1,
        // img1_id,
        img_2,
        // img2_id,
        img_3,
        // img3_id,
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
        made,
        material,
        shape,
        img_1,
        // img1_id,
        img_2,
        // img2_id,
        img_3,
        // img3_id,
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
    async editProduct(
      _,
      {
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
      },
      { pool }
    ) {
      const data = await editProduct(
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
      );
      return data;
    },
  },
};
export default resolverProduct;
