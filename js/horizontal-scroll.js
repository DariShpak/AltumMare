document.addEventListener("DOMContentLoaded", () => {
  const horizontalScroll = () => {
    const scrollContainer = document.querySelector(".horizontal-scroll")

    if (window.innerWidth >= 1024 && scrollContainer) {
      // Забороняємо вертикальний скрол для body
      document.body.style.overflow = "hidden"

      // Додаємо обробник події прокрутки
      scrollContainer.addEventListener("wheel", (e) => {
        e.preventDefault() // Відміняємо стандартну поведінку
        scrollContainer.scrollLeft += e.deltaY // Горизонтальний скрол
      })
    } else {
      document.body.style.overflow = "" // Повертаємо стандартну поведінку
    }
  }

  // Запустити логіку під час завантаження сторінки
  horizontalScroll()

  // Перевіряти зміну ширини екрану
  window.addEventListener("resize", horizontalScroll)
})
