import { combineReducers } from "redux";
import { loading } from "./Loading";
import { products } from "./Products";
import { products_k } from "./Products_k";
import { products_l } from "./Products_l";
import { products_t } from "./Products_t";
import { admin } from "./admin/admin";

export default combineReducers({
  loading,
  products,
  products_k,
  products_l,
  products_t,
  admin,
});
