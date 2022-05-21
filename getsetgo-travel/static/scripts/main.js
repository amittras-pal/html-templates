document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("gsgNavbar");
  document.addEventListener("scroll", () => {
    if (
      document.body.scrollTop >= 100 ||
      document.documentElement.scrollTop >= 100
    ) {
      navbar.classList.add("scrolled", "shadow-sm");
    } else {
      navbar.classList.remove("scrolled", "shadow-sm");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const myOffcanvas = document.getElementById("offcanvasExample");
  if (myOffcanvas) {
    const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas, {
      scroll: false,
    });
    document
      .getElementById("sidebarControl")
      .addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        bsOffcanvas.toggle();
      });
  }
});

function bookTour() {
  alert("Your details are saved!");
}

const tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

const popoverTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="popover"]')
);
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl, {
    html: true,
    customClass: "dn-popper shadow",
  });
});
