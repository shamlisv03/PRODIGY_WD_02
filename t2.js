let startTime;
let isRunning = false;
let lapCounter = 1;

function startPause() {
  if (!isRunning) {
    start();
  } else {
    pause();
  }
}

function start() {
  startTime = new Date();
  isRunning = true;
  document.getElementById("startPause").innerHTML = "Pause";
  update();
}

function pause() {
  isRunning = false;
  document.getElementById("startPause").innerHTML = "Resume";
}

function reset() {
  isRunning = false;
  document.getElementById("startPause").innerHTML = "Start";
  document.getElementById("display").innerHTML = "00:00:00";
  lapCounter = 1;
  document.getElementById("lapList").innerHTML = "";
}

function lap() {
  if (isRunning) {
    const lapTime = calculateTime();
    const lapItem = document.createElement("li");
    lapItem.className = "lap-item";
    lapItem.innerHTML = `Lap ${lapCounter}: ${lapTime}`;
    document.getElementById("lapList").appendChild(lapItem);
    lapCounter++;
  }
}

function update() {
  if (isRunning) {
    const currentTime = calculateTime();
    document.getElementById("display").innerHTML = currentTime;
    setTimeout(update, 10);
  }
}

function calculateTime() {
  const currentTime = new Date();
  const elapsedTime = new Date(currentTime - startTime);
  const minutes = elapsedTime.getUTCMinutes();
  const seconds = elapsedTime.getUTCSeconds();
  const milliseconds = elapsedTime.getUTCMilliseconds();
  return (
    (minutes < 10 ? "0" : "") +
    minutes +
    ":" +
    (seconds < 10 ? "0" : "") +
    seconds +
    ":" +
    (milliseconds < 10 ? "00" : milliseconds < 100 ? "0" : "") +
    milliseconds
  );
}

// Initial setup
reset();