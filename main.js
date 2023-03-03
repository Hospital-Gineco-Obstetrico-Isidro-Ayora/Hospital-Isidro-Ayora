
import { router } from "./src/router";
import 'bootstrap/dist/css/bootstrap.css';


const init = () => {
  router(window.location.hash);

  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
};

window.addEventListener("load", init);


