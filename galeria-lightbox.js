document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".galeria-grid img");
  const lightbox = document.getElementById("lightbox-galeria");
  const lightboxImg = document.querySelector(".lightbox-galeria-img");
  const closeBtn = document.querySelector(".close-galeria");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  let currentIndex = 0;

  const showImage = (index) => {
    lightboxImg.src = images[index].src;
    currentIndex = index;
    lightbox.classList.add("show");
  };

  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      showImage(index);
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("show");
  });

  leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Cerrar con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("show");
    }
    if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    }
    if (e.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  });
});
