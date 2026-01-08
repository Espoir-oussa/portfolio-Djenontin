document
  .querySelectorAll("nav .nav-links .link")
  .forEach(
    (link) =>
      link.href === window.location.href &&
      link.classList.add("active", "hover")
  );

const burgerMenu = document.querySelector("nav .burger-menu");
const navLinks = document.querySelector("nav .nav-links");
const contactLink = document.querySelector("header .contact a");

burgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  burgerMenu.classList.toggle("active");
});

// fermer le menu si clic en dehors
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !burgerMenu.contains(e.target)) {
    navLinks.classList.remove("open");
  }
});

links = document.querySelectorAll("nav .nav-links .link");
links.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});
