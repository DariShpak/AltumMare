// Отримуємо кнопку "Scroll to top"
const scrollToTopBtn = document.getElementById("scroll-to-top")

// Показуємо або ховаємо кнопку в залежності від позиції скролу
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Показуємо кнопку, коли прокручено більше ніж 300px
    scrollToTopBtn.style.display = "block"
  } else {
    scrollToTopBtn.style.display = "none"
  }
})

// Скрол до верху при натисканні на кнопку
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
})
