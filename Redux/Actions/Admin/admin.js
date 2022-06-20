import { ADMIN_TYPE } from "../../Types/Admin/admin";
import { getAdmin } from "../../../functions/admin/admin";
import signOut from "../../../functions/admin/signOut";

export const getAdminInfo = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_TYPE.LOADING_ON_ADMIN, payload: true });
    const user = await getAdmin("refreshToken");
    dispatch({ type: ADMIN_TYPE.ADMIN_INFO_TYPE, payload: user });
    dispatch({ type: ADMIN_TYPE.LOADING_OFF_ADMIN, payload: false });
  } catch (error) {
    // console.log(error);
  }
};

export const logoutAdmin = (router) => async (dispatch) => {
  try {
    signOut(router);
    dispatch({ type: ADMIN_TYPE.ADMIN_LOGOUT_TYPE, payload: null });
  } catch (error) {
    // console.log(error);
  }
};
