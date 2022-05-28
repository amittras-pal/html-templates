document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("fitnessBlog");
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

document
  .getElementById("subscription")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("You have been subscribed for weekly newsletter");
  });

document
  .getElementById("footerNewsletter")
  ?.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("You have been subscribed for weekly newsletter");
  });

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

// global owl carousel.
document.addEventListener("DOMContentLoaded", () => {
  $(".owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
