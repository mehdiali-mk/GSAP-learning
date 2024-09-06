gsap.to(".primary-heading", {
  transform: "translateX(-65%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    start: "top 0%",
    end: "top -500%",
    scrub: 2,
    pin: true,
  },
});
