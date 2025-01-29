document.querySelectorAll(".article-title").forEach((title) => {
  title.addEventListener("click", () => {
    const content = title.nextElementSibling

    // Закриваємо всі відкриті статті
    document.querySelectorAll(".article-content").forEach((item) => {
      if (item !== content) {
        item.style.maxHeight = null
      }
    })

    // Перемикаємо видимість поточної статті
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + "px"
    }
  })
})
