import { combineReducers } from "redux";
// import { user } from "./User/user";
import { loading } from "./Loading";
import { products } from "./Products";
import { products_k } from "./Products_k";
import { products_l } from "./Products_l";
import { products_t } from "./Products_t";

export default combineReducers({
  // user,
  loading,
  products,
  products_k,
  products_l,
  products_t,
});
