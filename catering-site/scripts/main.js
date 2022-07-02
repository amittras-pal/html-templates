document.addEventListener("DOMContentLoaded", () => {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
});

var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      e.stopPropagation();
      alert("The form has been submitted successfully!!!");
    });
  });
});
