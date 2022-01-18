// window.addEventListener("DOMContentLoaded", setup);

// function setup() {
// const options = {
//   rootMargin: "0 0 -200px 0",
// };
const cards = document.querySelector(".card");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("show", entry.isIntersecting)
    })
  },
  {
    threshold: 0.5,
  }
)

cards.forEach((card) => {
  observer.observe(card);
});

// const paras = document.querySelectorAll("a");
// paras.forEach((a = observer.observe(a)));
// // }
