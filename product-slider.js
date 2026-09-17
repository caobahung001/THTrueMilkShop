const slider = document.querySelector(".product-slider");
const track = document.querySelector(".product-track");

if (slider && track) {
  let down = false;
  let startX;
  let current = 0;

  slider.addEventListener("mousedown", (e) => {
    down = true;

    track.classList.add("dragging");

    startX = e.pageX;
  });

  slider.addEventListener("mouseup", () => {
    down = false;

    track.classList.remove("dragging");
  });

  slider.addEventListener("mouseleave", () => {
    down = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (!down) return;

    let move = e.pageX - startX;

    track.style.transform = `translateX(${current + move}px)`;
  });

  slider.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;

    track.classList.add("dragging");
  });

  slider.addEventListener("touchmove", (e) => {
    let move = e.touches[0].clientX - startX;

    track.style.transform = `translateX(${move}px)`;
  });
}
