let timeLine = gsap.timeline();

timeLine.to(".menus", {
  right: "0%",
  duration: 0.6,
});
timeLine.from(".menus h4", {
  opacity: 0,
  x: 150,
  duration: 0.6,
  stagger: 0.1,
});

timeLine.pause();

const toggleBtnEl = document.querySelector(".my-icon");
const menuEl = document.querySelector(".menus");

toggleBtnEl.addEventListener("click", () => {
  toggleBtnEl.classList.toggle("ri-menu-3-fill");
  toggleBtnEl.classList.toggle("ri-close-line");

  if (toggleBtnEl.classList.contains("ri-close-line")) {
    timeLine.play();
  } else {
    timeLine.reverse();
  }
});
