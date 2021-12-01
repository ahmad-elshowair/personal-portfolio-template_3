// create function to add class class to the current element
function addActiveClass(links) {
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            links.forEach(e => e.classList.remove("active"));
            e.target.classList.add("active");
        })
    });
}
const navLinks = document.querySelector(".navbar").querySelectorAll(".nav-link");
addActiveClass(navLinks);


document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const navbarHeight = navbar.offsetHeight;
    navbar.classList.toggle("scrolled", window.scrollY > navbarHeight);
});