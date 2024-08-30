let timeLine = gsap.timeline();

timeLine.from(".nav-bar", {
  y: -30,
  opacity: 0,
  duration: 0.5,
  delay: 0.25,
});

timeLine.from(".nav-logo", {
  y: -30,
  opacity: 0,
  duration: 0.6,
});

timeLine.from(".nav-item", {
  y: -30,
  opacity: 0,
  duration: 0.6,
  stagger: 0.3,
});

timeLine.from(".primary-heading", {
  opacity: 0,
  y: 120,
  scale: 0.2,
  duration: 1,
});

timeLine.from(".primary-heading #number", {
  rotate: 360,
  yoyo: true,
  duration: 1,
  delay: -0.2,
});
