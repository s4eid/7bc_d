import { getUsers } from "../../Querys/user/getUsers";
import { addUser } from "../../Querys/user/addUser";
import { deleteUser } from "../../Querys/user/deleteUser";
import { addUser_address } from "../../Querys/user/addUser_address";
import { addUser_payment } from "../../Querys/user/addUser_payment";
import { getUser } from "../../Querys/user/getUser";
const resolverUser = {
  Query: {
    async users(_, __, { pool }) {
      const data = await getUsers(pool);
      return data;
    },
    async user(_, { user_id }, { pool }) {
      const data = await getUser(user_id, pool);
      return data;
    },
  },
  Mutation: {
    async addUser(
      _,
      { full_name, email, password, phone_number },
      { pool, res }
    ) {
      const data = await addUser(
        full_name,
        email,
        password,
        phone_number,
        pool,
        res
      );
      return data;
    },
    async deleteUser(_, { user_id }, { pool }) {
      const data = await deleteUser(user_id, pool);
      return data;
    },
    async addUser_address(
      _,
      { address, country, city, area, zip_code, ip, user_id },
      { pool }
    ) {
      const data = await addUser_address(
        address,
        country,
        city,
        area,
        zip_code,
        ip,
        user_id,
        pool
      );
      return data;
    },
    async addUser_payment(
      _,
      { owner, cart_number, expire_m, expire_y, type, cvv, company, user_id },
      { pool }
    ) {
      const data = await addUser_payment(
        owner,
        cart_number,
        expire_m,
        expire_y,
        type,
        cvv,
        company,
        user_id,
        pool
      );
      return data;
    },
  },
};
export default resolverUser;
