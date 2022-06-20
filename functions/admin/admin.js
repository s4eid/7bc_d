import jwt_decode from "jwt-decode";
import Cookies from "js-cookie";

export const getAdmin = async (name) => {
  const cookie = Cookies.get(name);
  const data = JSON.stringify(cookie);
  const user = await jwt_decode(data);
  return user;
};

export const getUser_server = async (token, session) => {
  if (!token) {
    return session;
  }
  const data = JSON.stringify(token);
  const user = await jwt_decode(data);
  return user;
};
