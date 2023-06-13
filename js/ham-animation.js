const hamburger = document.querySelector(".headAnime");
const navbar = document.querySelector(".navLinks");
const links = document.querySelectorAll(".navLinks li");
const headtext = document.querySelector(".mainText");
const section1 = document.querySelector(".first")

hamburger.addEventListener("click", () => {
    navbar.classList.toggle("open");
    headtext.classList.toggle("hidden");
    headtext
    links.forEach(link => {
        link.classList.toggle("fade")
    })
})