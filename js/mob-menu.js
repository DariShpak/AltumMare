// Отримуємо кнопку, іконки та меню
const menuBtn = document.querySelector(".mob-menu-btn")
const menu = document.getElementById("mob-menu")
const iconBurger = document.getElementById("icon-burger")
const iconClose = document.getElementById("icon-close")

// Додаємо обробник кліку для відкриття/закриття меню
menuBtn.addEventListener("click", () => {
  const isMenuOpen = menu.style.display === "block"

  // Перемикаємо стан меню
  menu.style.display = isMenuOpen ? "none" : "block"

  // Перемикаємо іконки
  iconBurger.classList.toggle("hidden", !isMenuOpen)
  iconClose.classList.toggle("hidden", isMenuOpen)
})
