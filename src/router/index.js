import { pages } from "../controllers/index"

const router = async (route) => {

    let content = document.getElementById("root")
    content.innerHTML = ""

    switch (route) {
        case "#/": {
            return content.appendChild(pages.home())

        }
        case "#/Hospital": {
            return content.appendChild(pages.hospital())
        }
        case "#/Servicios": {
            return content.appendChild(pages.servicios())
        }
    }
}


export { router }