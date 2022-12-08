const nav = document.querySelector("nav")
const hmaburgerMenu = document.querySelector(".hamburger-menu .menu")
const hamburgerBtn = document.querySelector(".hamburger-btn")

nav.addEventListener("click", (e) => {
    const target = e.target
    hmaburgerMenu.classList.toggle("open-menu")
    if (target.classList.contains("hamburger-btn")) {
        console.log("open")
    } else if(!target.classList.contains("hamburger-btn")) {
        hmaburgerMenu.classList.remove("open-menu")
        console.log(target)
    }
    
})