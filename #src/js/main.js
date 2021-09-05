const swiper = new Swiper(".banner-section__slider", {
    loop: true,
    speed: 900,
    slidesPerView: 1,
    spaceBetween: 1,
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
});