import Cookies from "js-cookie";

export default async (router) => {
  Cookies.remove("refreshToken");
  Cookies.remove("accessToken");
  router.reload();
};
