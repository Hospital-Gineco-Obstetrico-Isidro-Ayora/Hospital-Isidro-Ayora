/* Para la funcionalidad de las rutas del menu de navegacion */

import { router } from "./src/router/index.js";


const init = () => {
  router(window.location.hash);

  window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
};

window.addEventListener("load", init);

/* Para que el menu hamburguesa se muestre o se oculte */
var menuToggle = document.getElementById("menu-toggle");
var navbarCollapse = document.getElementById("navbarNav");

menuToggle.addEventListener("click", function () {
  navbarCollapse.classList.toggle("show");
});


