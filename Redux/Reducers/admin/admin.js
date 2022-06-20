import { ADMIN_TYPE } from "../../Types/Admin/admin";

const inisialState = {
  email: null,
  admin_id: null,
  name: null,
  loading: true,
  // exp: null,
};

export const admin = (state = inisialState, action) => {
  switch (action.type) {
    case ADMIN_TYPE.LOADING_OFF_ADMIN:
      return {
        ...state,
        loading: action.payload,
      };
    case ADMIN_TYPE.LOADING_ON_ADMIN:
      return {
        ...state,
        loading: action.payload,
      };
    case ADMIN_TYPE.ADMIN_INFO_TYPE:
      return action.payload;
    case ADMIN_TYPE.ADMIN_LOGOUT_TYPE:
      return action.payload;
    default:
      return state;
  }
};
