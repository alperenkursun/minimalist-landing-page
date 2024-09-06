const hamburgerMenu = document.querySelector(".hamburger-menu");
const closeMenu = document.querySelector(".menu-icon");
const mobileContent = document.querySelector(".mobile-menu-content");

hamburgerMenu.addEventListener("click", () => {
  mobileContent.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  mobileContent.classList.remove("active");
});
