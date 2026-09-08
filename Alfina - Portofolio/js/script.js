// ================= IMAGE MODAL =================
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close-image");

if (modal && modalImg) {
    document.querySelectorAll(".preview-image").forEach(img => {
        img.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImg.src = img.src;
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}

// ================= MOBILE NAVIGATION =================
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.getElementById("nav-menu");

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        const icon = mobileMenu.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-xmark");
        }
    });

    // Close menu when a link is clicked
    document.querySelectorAll(".nav-menu a").forEach(link => {
        link.addEventListener("click", () => {
            navMenu.classList.remove("active");
            const icon = mobileMenu.querySelector("i");
            if (icon) {
                icon.classList.add("fa-bars");
                icon.classList.remove("fa-xmark");
            }
        });
    });
}
