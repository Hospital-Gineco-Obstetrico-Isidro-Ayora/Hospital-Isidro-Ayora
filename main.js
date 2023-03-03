
import { router } from "./src/router/index.route";

import "bootstrap/dist/css/bootstrap.min.css";

const init = () => {
  router(window.location.hash);

  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
};

window.addEventListener("load", init);


