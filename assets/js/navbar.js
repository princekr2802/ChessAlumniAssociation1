
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.querySelector(".navbar ul");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
});
