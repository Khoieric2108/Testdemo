const time = document.getElementById("duration");
const start = document.getElementById("start");
const timeleft = document.getElementById("timeleft");
let remaintime;
function showTimeLeft() {
  timeleft.textContent = remaintime;
}
function countdown() {
  clearInterval(remaintime);
  remaintime = parseInt(timeleft.textContent) - 1;
  time.textContent = remaintime;
  if (remaintime < 0) {
    time.textContent = "00:00";
    alert("Hết giờ ");
  }
}
