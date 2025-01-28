document.addEventListener("DOMContentLoaded", () => {
  new fullpage("#fullpage", {
    autoScrolling: true, // Автоматичний скролінг
    fitToSection: true, // Адаптація до секцій
    navigation: true, // Додаємо кружечки для навігації
    navigationPosition: "bottom", // Розташування навігації внизу
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE", // Ліцензія
    scrollHorizontally: true, // Горизонтальний скрол між секціями
    slidesNavigation: true, // Додаємо навігацію між слайдами
    controlArrows: false // Прибираємо стрілки управління слайдами
  })
})
