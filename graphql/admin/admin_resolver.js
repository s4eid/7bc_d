import { getAdmins } from "../../Querys/admin/getAdmins";
import { addAdmin } from "../../Querys/admin/addAdmin";
import { loginAdmin } from "../../Querys/admin/loginAdmin";

const resolverAdmin = {
  Query: {
    async admins(_, __, { pool }) {
      const data = await getAdmins(pool);
      return data;
    },
  },
  Mutation: {
    async addAdmin(_, { full_name, email, password, phone_number }, { pool }) {
      const data = await addAdmin(
        full_name,
        email,
        password,
        phone_number,
        pool
      );
      return data;
    },
    async loginAdmin(_, { email, password, token }, { res, pool }) {
      const data = await loginAdmin(email, password, token, res, pool);
      return data;
    },
  },
};
export default resolverAdmin;
