// Отримуємо елементи
const openModalBtn = document.querySelector(".open-modal-btn")
const modal = document.getElementById("contact-modal")
const closeModalBtn = document.getElementById("close-modal")

// Відкриваємо модальне вікно
openModalBtn.addEventListener("click", () => {
  modal.style.display = "block"
})

// Закриваємо модальне вікно
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
