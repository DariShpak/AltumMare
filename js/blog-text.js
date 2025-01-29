document.querySelectorAll(".article-title").forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling

    // Закриваємо всі інші відкриті статті
    document.querySelectorAll(".article-content").forEach((item) => {
      if (item !== content) {
        item.classList.remove("open")
      }
    })

    // Перемикаємо клас open для поточного контенту
    content.classList.toggle("open")
  })
})
