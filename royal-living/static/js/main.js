document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("rlNavbar");
  document.addEventListener("scroll", () => {
    if (
      document.body.scrollTop >= 100 ||
      document.documentElement.scrollTop >= 100
    ) {
      navbar.classList.add("scrolled", "shadow");
    } else {
      navbar.classList.remove("scrolled", "shadow");
    }
  });
});
