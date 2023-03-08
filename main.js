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

function updateClock() {
  const now = new Date();

  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");

  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateClock, 1000);

updateClock();


