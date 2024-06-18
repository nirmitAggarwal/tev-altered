let width = screen.width;
if (width > 768) {
  Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

  const heroText = document.getElementById("heroText");

  document.addEventListener("mousemove", (e) => {
    const { clientX: mouseX, clientY: mouseY } = e;
    const { left, top, width, height } = heroText.getBoundingClientRect();
    const dx = mouseX - (left + width / 2);
    const dy = mouseY - (top + height / 2);
    const tiltX = (dy / (height / 2)).toFixed(2);
    const tiltY = (-(dx / (width / 2))).toFixed(2);

    heroText.style.textShadow = `${tiltY * 6}px ${
      tiltX * 6
    }px 0px rgba(255,255,255,0.5)`;
  });
}

Shery.textAnimate(".aclonica-regular" /* Element to target.*/, {
  //Parameters are optional.
  style: 1,
  y: 10,
  delay: 0.1,
  duration: 2,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.imageEffect(".img", {
  style: 2, //Select Style
  debug: true, // Debug Panel
  config: {
    /* Config made from debug panel */
  },
  preset: "./presets/wigglewobble.json",
});
