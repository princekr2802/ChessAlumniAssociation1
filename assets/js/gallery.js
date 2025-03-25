
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery-grid img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const imgElement = document.createElement("img");
    lightbox.appendChild(imgElement);

    const closeButton = document.createElement("span");
    closeButton.innerHTML = "&times;";
    closeButton.classList.add("lightbox-close");
    lightbox.appendChild(closeButton);

    images.forEach(img => {
        img.addEventListener("click", function () {
            imgElement.src = img.src;
            lightbox.classList.add("active");
        });
    });

    closeButton.addEventListener("click", function () {
        lightbox.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const alumniData = [
        { name: "John Doe", description: "Former Chess Captain", img: "alumni1.jpg" },
        { name: "Jane Smith", description: "National Chess Champion", img: "alumni2.jpg" }
    ];

    const galleryImages = Array.from({ length: 100 }, (_, i) => `gall${i+1}.jpg`);

    const alumniContainer = document.getElementById("alumniContainer");
    alumniData.forEach(alumni => {
        const div = document.createElement("div");
        div.classList.add("alumni-item");
        div.innerHTML = `<img src="assets/images/alumni/${alumni.img}" alt="${alumni.name}">
                         <h3>${alumni.name}</h3><p>${alumni.description}</p>`;
        alumniContainer.appendChild(div);
    });

    const galleryContainer = document.getElementById("galleryContainer");
    galleryImages.forEach(img => {
        const imgElement = document.createElement("img");
        imgElement.src = `assets/images/gallery/${img}`;
        imgElement.alt = "Gallery Image";
        galleryContainer.appendChild(imgElement);
    });
});
