document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".mySwiper", {
    direction: "horizontal", // Горизонтальний скрол
    loop: false, // Без зациклення
    pagination: {
      el: ".swiper-pagination", // Кружечки пагінації
      clickable: true
    },
    keyboard: {
      enabled: true // Дозволяє керувати з клавіатури (стрілки)
    },
    mousewheel: {
      invert: false // Дозволяє прокручувати коліщатком миші
    },
    grabCursor: false // Курсор змінюється на "руку"
  })
})
