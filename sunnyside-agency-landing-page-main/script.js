const hamburger = document.querySelector(".hamburger")
const nav = document.querySelector(".nav")

hamburger.addEventListener("click", () => {
  if (nav.classList.contains("open")) {
    // Start closing animation
    nav.classList.remove("open")
    nav.classList.add("close")

    // Use setTimeout to wait for animation to finish before hiding the element
    setTimeout(() => {
      nav.classList.remove("close")
      nav.style.visibility = "hidden" // Hide the menu after the animation
    }, 300) // Match the duration of the CSS transition
  } else {
    // Opening the menu
    nav.style.visibility = "visible" // Ensure it's visible when opening
    nav.classList.remove("close")
    nav.classList.add("open")
  }
})
