// Mobile Menu Toggle
const toggle = document.querySelector('.toggle');
const navbar = document.querySelector('.navbar');

function toggleNavbar() {
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        navbar.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

toggle.addEventListener('click', toggleNavbar, false);


