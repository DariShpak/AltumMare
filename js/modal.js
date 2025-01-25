// Отримуємо всі кнопки для відкриття модалки
const openModalBtns = document.querySelectorAll(".open-modal-btn")
const modal = document.getElementById("contact-modal")
const closeModalBtn = document.getElementById("close-modal")

// Відкриваємо модальне вікно при натисканні на будь-яку кнопку
openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block"
  })
})

// Закриваємо модальне вікно при натисканні на кнопку закриття
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none"
})

// Закриття вікна при натисканні на фон
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none"
  }
})

// Обробник відправки форми (можна додати тут логіку для відправки)
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault()
  // Логіка для відправки форми, наприклад, через AJAX або API
  alert("Форма відправлена!")
  modal.style.display = "none" // Закриваємо модальне вікно після відправки
})
