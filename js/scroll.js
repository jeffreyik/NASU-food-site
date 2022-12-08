const nav = document.querySelector("nav")

window.onscroll = () => {
    if (scrollY > 60) {
        nav.style.boxShadow = "0 2px 5px rgba(173, 24, 24, 0.094)"
    } else {
        nav.style.boxShadow = "none"
    }

    // console.log(scrollY)
}