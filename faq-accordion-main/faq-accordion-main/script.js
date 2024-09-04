document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const toggle = item.querySelector(".toggle")
    const answer = item.querySelector(".answer")
    const openIcon = item.querySelector(".open")
    const closeIcon = item.querySelector(".close")

    toggle.addEventListener("click", () => {
      console.log("click")
      answer.classList.toggle("hide")
      openIcon.classList.toggle("hide")
      closeIcon.classList.toggle("hide")
    })
  })
})
