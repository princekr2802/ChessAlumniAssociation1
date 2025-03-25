document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully");

    // Load navigation bar functionality
    if (typeof setupNavbar === "function") {
        setupNavbar();
    }

    // Load dark mode toggle functionality
    if (typeof setupDarkMode === "function") {
        setupDarkMode();
    }

    // Load gallery functionality
    if (typeof setupGallery === "function") {
        setupGallery();
    }

    // Load testimonials functionality
    if (typeof setupTestimonials === "function") {
        setupTestimonials();
    }

    // Load back-to-top button functionality
    if (typeof setupBackToTop === "function") {
        setupBackToTop();
    }
});
