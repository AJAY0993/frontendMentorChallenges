document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item")

  faqItems.forEach((item) => {
    const toggle = item.querySelector(".toggle")
    const answer = item.querySelector(".answer")
    const openIcon = item.querySelector(".open")
    const closeIcon = item.querySelector(".close")

    toggle.addEventListener("click", () => {
      console.log("click")
      if (answer.classList.contains("hide")) {
        answer.classList.remove("hide")
        openIcon.classList.add("hide")
        closeIcon.classList.remove("hide")
      } else {
        answer.classList.add("hide")
        openIcon.classList.remove("hide")
        closeIcon.classList.add("hide")
      }
    })
  })
})
