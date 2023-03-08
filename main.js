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


    /*Para desplegar infromación de botones */
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var info = document.getElementById("info");

    btn1.addEventListener("click", function() {
    info.innerHTML = "Información del botón 1";
    info.style.display = "block";
    });

    btn2.addEventListener("click", function() {
    info.innerHTML = "Información del botón 2";
    info.style.display = "block";
    });

    btn3.addEventListener("click", function() {
    info.innerHTML = "Información del botón 3";
    info.style.display = "block";
    });

    window.addEventListener("resize", function() {
    if (window.innerWidth < 768) {
        btn1.style.width = "100%";
        btn2.style.width = "100%";
        btn3.style.width = "100%";
    } else {
        btn1.style.width = "auto";
        btn2.style.width = "auto";
        btn3.style.width = "auto";
    }
    });