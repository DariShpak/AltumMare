document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 1024) {
    const swiper = new Swiper(".mySwiper", {
      direction: "horizontal", // Горизонтальний напрямок
      loop: false, // Без зациклення
      slidesPerView: 1.5, // Одна секція за раз
      spaceBetween: 0, // Відстань між секціями
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      mousewheel: true, // Прокрутка мишкою
      keyboard: {
        enabled: true // Управління клавіатурою
      }
    })
  } else {
    // Для мобільних додаємо стандартний вертикальний скрол
    document.body.style.overflowY = "auto"
  }
})
