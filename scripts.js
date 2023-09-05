const circle = document.getElementById("circle");

window.addEventListener("mousemove", (details) => {
  let xval = details.pageX;
  let yval = details.pageY;
  setTimeout(() => {
    circle.style.left = xval + "px";
    circle.style.top = yval + "px";
  }, 100);
});

$("#hero h1").textillate({
  delay: 20,
  in: {
    effect: "fadeInUp",
  },
  loop: true,
  out: {
    effect: "fadeOutRight",
  },
});

let tl = gsap.timeline();

tl.to(".anim", {
  scrollTrigger: {
    trigger: "#down",
    start: "top 5%",
    toggleActions: "play pause resume reverse",
  },
  opacity: 0,
  y: -25,
  stagger: 0.3,
  duration: 1,
  onComplete: () => {
    $("#down #text h3").textillate("start");
  },
});

$("#down #text h3").textillate({
  autoStart: false,
  in: {
    effect: "fadeInUp",
    delay: 10,
  },
  callback: function () {
    gsap.fromTo(
      "#down #text img",
      {
        opacity: 0,
        y: -40,
        duration: 3,
        ease: "Expo.easeInOut",
      },
      {
        opacity: 1,
        y: 0,
        // callback: function () {
        //   tl.to("#down #text h3", { opacity: 0, duration: 1 });
        // },
      }
    );
  },
});
