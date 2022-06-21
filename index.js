$("#customer_carousel").owlCarousel({
  loop: true,
  margin: 30,
  autoplay: false,
  center: true,
  dots: true,
  autoplayTimeout: 2000,
  stagePadding: 50,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    800: {
      item: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 3,
    },
    1440: {
      items: 3,
    },
    1600: {
      items: 5,
    },
    1920: {
      items: 5,
    },
  },
});
