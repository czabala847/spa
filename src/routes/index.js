import Header from "../templates/Header";
import Home from "../pages/Home";
import Character from "../pages/Character";
import Error404 from "../pages/Error404";

import getHash from "../util/getHash";
import resolveRoutes from "../util/resolveRoutes";

const arrRoute = {
  "/": Home,
  "/:id": Character,
  "/contact:": "Contact",
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  header.innerHTML = await Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = arrRoute[route] ? arrRoute[route] : Error404;

  content.innerHTML = await render();
};

export default router;
