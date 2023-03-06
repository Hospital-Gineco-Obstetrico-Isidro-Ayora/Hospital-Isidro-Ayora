import { pages } from "../controllers/index"

const router = async (route) => {
    
    let content = document.getElementById("root")
    const titleElement = document.querySelector('title');
    content.innerHTML = ""

    const active = () =>{
        if(titleElement.innerHTML === "Home"){
            document.querySelector('.nav-pc .items-nav').classList.add('activo')
        }
    }

    const setActiveNavItem = (selector, parentSelector) => {
        // obtenemos la URL actual
        const url = window.location.href;
    
        // buscamos el elemento de navegación que corresponde a la URL actual
        const navLinks = document.querySelectorAll(selector);
        navLinks.forEach(navLink => {
            if (navLink.href === url) {
                navLink.closest(parentSelector).classList.add('activo');
            } else {
                navLink.closest(parentSelector).classList.remove('activo');
            }
        });
    };

    switch (route) {
        case "#/": {
            titleElement.innerHTML = "Home";
            setActiveNavItem('.navbar-nav .nav-link', 'li');
            setActiveNavItem('.nav-pc .items-nav', 'a'); 

            return content.appendChild(pages.home())

        }
        case "#/Hospital": {
            titleElement.innerHTML = "Hospital";
            setActiveNavItem('.navbar-nav .nav-link', 'li');
            setActiveNavItem('.nav-pc .items-nav', 'a'); 
            
            return content.appendChild(pages.hospital())
        }
        case "#/Servicios": {
            titleElement.innerHTML = "Servicios";
            setActiveNavItem('.navbar-nav .nav-link', 'li');
            setActiveNavItem('.nav-pc .items-nav', 'a');             
            return content.appendChild(pages.servicios())
        }
        default: {
            titleElement.innerHTML = "Home";
            active();
            return content.appendChild(pages.home())
        }
    }
}


export { router }