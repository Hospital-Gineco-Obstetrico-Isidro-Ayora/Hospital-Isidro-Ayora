import { pages } from "../controllers/index"

const router = async (route) => {

    let content = document.getElementById("root")
    content.innerHTML = ""

    switch (route) {
        case "#/": {
            console.log("home")
            return content.appendChild(pages.home())

        }
        case "#/posts": {
            console.log("posts")
            return content.appendChild(pages.posts())
        }
    }
}


export { router }