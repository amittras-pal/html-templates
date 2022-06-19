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
