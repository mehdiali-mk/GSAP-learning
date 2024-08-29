gsap.from("#textBox1 .secondary-heading", {
  y: 80,
  opacity: 0,
  color: "#5c5470",
  duration: 1,
  delay: 1,
  stagger: 0.3,
  yoyo: true,
  repeat: 1,
});

gsap.to("#textBox2", {
  color: "#5c5470",
  y: 180,
  duration: 1,
  delay: 1,
});
gsap.to("#textBox2 .secondary-heading", {
  color: "#5c5470",
  duration: 1,
  delay: 1,
  stagger: 0.4,
  yoyo: true,
  repeat: 1,
});
