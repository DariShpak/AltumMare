document.addEventListener("DOMContentLoaded", () => {
  let swiperInstance

  function initSwiper() {
    if (window.innerWidth >= 1024) {
      if (!swiperInstance) {
        swiperInstance = new Swiper(".mySwiper", {
          direction: "horizontal",
          loop: false,
          slidesPerView: 1,
          spaceBetween: 0,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          mousewheel: true,
          keyboard: {
            enabled: true
          },
          allowSlideNext: true,
          allowSlidePrev: true
        })

        document.body.style.overflow = "hidden"
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true)
        swiperInstance = undefined
      }

      document.body.style.overflow = "auto"

      document
        .querySelector(".swiper-wrapper")
        ?.classList.remove("swiper-wrapper")
      document.querySelectorAll(".swiper-slide").forEach((slide) => {
        slide.classList.remove("swiper-slide")
      })
    }
  }

  initSwiper()
  window.addEventListener("resize", initSwiper)
})
