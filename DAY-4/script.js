gsap.from("#box1", {
  rotate: 360,
  opacity: 0,
  scale: 0,
  duration: 1.5,
  delay: 0.5,
});

gsap.from("#box2", {
  rotate: 360,
  duration: 1,
  scale: 0.2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#box2",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
  },
  yoyo: true,
  repeat: 1,
});

gsap.from(".section .my-heading", {
  opacity: 0,
  x: 300,
  duration: 2,
  scrollTrigger: {
    trigger: ".my-heading",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
  },
});

gsap.from(".section .my-title", {
  opacity: 0,
  x: -300,
  duration: 2,
  scrollTrigger: {
    trigger: ".my-heading",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
  },
});
