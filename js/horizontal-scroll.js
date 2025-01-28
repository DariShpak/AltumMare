document.addEventListener("DOMContentLoaded", () => {
  new fullpage("#fullpage", {
    autoScrolling: true, // Автоматичний скрол
    fitToSection: true, // Адаптація до секцій
    navigation: true, // Кружечки навігації
    navigationPosition: "bottom", // Розташування навігації
    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
    scrollHorizontally: true, // Горизонтальний скрол
    slidesNavigation: true, // Навігація для слайдів
    controlArrows: false // Вимкнути стрілки для слайдів
  })
})
