import { pages } from "../controllers/index"

const router = async (route) => {

    let content = document.getElementById("root")
    content.innerHTML = ""

    switch (route) {
        case "#/": {
            console.log("home")
            return content.appendChild(pages.home())

        }
        case "#/Hospital": {
            console.log("posts")
            return content.appendChild(pages.hospital())
        }
        case "#/Servicios": {
            console.log("posts")
            return content.appendChild(pages.servicios())
        }
    }
}


export { router }