const audio = document.querySelector("#audio");
const playBtn = document.querySelector("#playBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const stopBtn = document.querySelector("#stopBtn");
const volumeSlider = document.querySelector("#volumeBtn");

audio.volume = Number(volumeSlider.value);

playBtn.addEventListener("click", () => {
  audio.play();
});

pauseBtn.addEventListener("click", () => {
  audio.pause();
});

stopBtn.addEventListener("click", () => {
  audio.pause();
  audio.currentTime = 0;
});

volumeSlider.addEventListener("input", (event) => {
  audio.volume = Number(event.target.value);
});
