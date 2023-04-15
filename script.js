const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;
let previousScrollPosition = 0;

window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 300) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
