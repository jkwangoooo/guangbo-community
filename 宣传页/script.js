const hero = document.querySelector(".case-hero");
const sensors = document.querySelector(".sensor--left");

window.addEventListener("pointermove", (event) => {
  const x = Math.round(event.clientX);
  const y = Math.round(event.clientY);

  if (sensors) {
    sensors.firstElementChild.textContent = `X:${x} Y:${y}`;
  }

  if (hero) {
    const px = (event.clientX / window.innerWidth - 0.5) * 10;
    const py = (event.clientY / window.innerHeight - 0.5) * 10;
    hero.style.setProperty("--look-x", `${px}px`);
    hero.style.setProperty("--look-y", `${py}px`);
  }
});
