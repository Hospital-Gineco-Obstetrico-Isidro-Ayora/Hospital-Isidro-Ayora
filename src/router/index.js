import { pages } from "../controllers/index"

const router = async (route) => {

    const setActiveNavItem = () => {
        // obtenemos la URL actual
        const url = window.location.href;

        // buscamos el elemento de navegación que corresponde a la URL actual
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(navLink => {
            if (navLink.href === url) {
                navLink.parentElement.classList.add('activo');
            } else {
                navLink.parentElement.classList.remove('activo');
            }
        });
    };

    const setActiveNavItemPC = () => {
        // obtenemos la URL actual
        const url = window.location.href;

        // buscamos el elemento de navegación que corresponde a la URL actual
        const navLinks = document.querySelectorAll('.nav-pc .items-nav');
        navLinks.forEach(navLink => {
            if(navLink.href === url) {
                navLink.classList.add('activo');
                console.log(navLink)
            } else {
                navLink.classList.remove('activo');
            }

        });
    };


    let content = document.getElementById("root")
    const titleElement = document.querySelector('title');
    content.innerHTML = ""


    switch (route) {
        case "#/": {
            titleElement.innerHTML = "Home";
            setActiveNavItem();
            setActiveNavItemPC();
            return content.appendChild(pages.home())

        }
        case "#/Hospital": {
            titleElement.innerHTML = "Hospital";
            setActiveNavItem();
            setActiveNavItemPC();
            return content.appendChild(pages.hospital())
        }
        case "#/Servicios": {
            titleElement.innerHTML = "Servicios";
            setActiveNavItem();
            setActiveNavItemPC();
            return content.appendChild(pages.servicios())
        }
    }
}


export { router }