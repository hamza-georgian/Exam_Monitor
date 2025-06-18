// script.js

function updateDate() {
  const today = new Date();
  document.getElementById("currentDate").textContent = today.toLocaleDateString();
}

function startCountdown(duration) {
  let time = duration * 60;
  const countdownEl = document.getElementById("countdown");
  clearInterval(window.timerInterval);

  window.timerInterval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    countdownEl.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    time--;

    if (time < 0) {
      clearInterval(window.timerInterval);
      countdownEl.textContent = "Time's up!";
    }
  }, 1000);
}

document.getElementById("timerSelect").addEventListener("change", function () {
  const selected = parseInt(this.value);
  if (selected > 0) {
    startCountdown(selected);
  } else {
    document.getElementById("countdown").textContent = "";
  }
});

window.onload = updateDate;
