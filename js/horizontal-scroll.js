document.addEventListener("DOMContentLoaded", () => {
  const swiperContainer = document.querySelector(".mySwiper")
  let swiperInstance

  function handleBreakpointChange(e) {
    if (e.matches) {
      // Якщо ширина вікна >= 1024px
      if (!swiperInstance && swiperContainer) {
        swiperInstance = new Swiper(".mySwiper", {
          direction: "horizontal",
          loop: false,
          slidesPerView: 1.3,
          spaceBetween: 0,
          pagination: {
            el: ".swiper-pagination",
            clickable: true
          },
          mousewheel: true,
          keyboard: {
            enabled: true
          }
        })
        document.body.style.overflow = "hidden"
      }
    } else {
      // Якщо ширина вікна < 1024px
      if (swiperInstance) {
        swiperInstance.destroy(true, true)
        swiperInstance = undefined
        document.body.style.overflow = "auto"
      }
    }
  }

  const breakpoint = window.matchMedia("(min-width: 1024px)")
  breakpoint.addListener(handleBreakpointChange)
  handleBreakpointChange(breakpoint)
})
