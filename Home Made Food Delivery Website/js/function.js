let navbar = document.querySelector("#navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY >= 100) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});
