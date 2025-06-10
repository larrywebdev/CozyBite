const hamburger = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close-icon");
const menu = document.querySelector(".navigation-container");
function updateFooterWidth() {
  const element = document.querySelector(".home-testimonial");
  const width = element.getBoundingClientRect().width;
  document.documentElement.style.setProperty(
    "--my-element-width",
    `${width}px`
  );
}
window.addEventListener("resize", updateFooterWidth);
hamburger.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent click from reaching document
  menu.classList.add("show");
  document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
});

closeIcon.addEventListener("click", () => {
  menu.classList.remove("show");
  document.body.style.overflow = ""; // Restore scrolling when menu is closed
});

menu.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent clicks inside the menu from closing it
});

document.addEventListener("click", () => {
  menu.classList.remove("show");
  document.body.style.overflow = ""; // Restore scrolling when menu is closed
});
document.querySelectorAll(".navigation-container a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show");
    document.body.style.overflow = ""; // Restore scrolling when menu is closed
  });
});
