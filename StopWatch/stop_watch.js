window.onload = function() {
  var display = document.getElementById("display");
  var startbtn = document.getElementById("start");
  var stopbtn = document.getElementById("stop");
  var resetbtn = document.getElementById("reset");

  startbtn.onclick = start;

  var startTime;
  var elapsedTime = 0;
  var timerId;
  var timeToAdd = 0;

  function updateTimerText() {
    var m = Math.floor(elapsedTime / 60000);
    var s = Math.floor(elapsedTime % 60000 / 1000);
    var ms = elapsedTime % 1000;

    m = ('0' + m).slice(-2);
    s = ('0' + s).slice(-2);
    ms = ('00' + ms).slice(-3);

    display.textContent = m + ':' + s + '.' + ms;
  }

  function countUp() {
    timerId = setTimeout(function() {
      elapsedTime = Date.now() - startTime + timeToAdd;
      updateTimerText();
      countUp();
    }, 10)
  }

  function updateButtonState(startButtonState, stopButtonState, resetButtonState) {
    startbtn.className = startButtonState ? 'btn' : 'btn inactive';
    stopbtn.className = stopButtonState ? 'btn' : 'btn inactive';
    resetbtn.className = resetButtonState ? 'btn' : 'btn inactive';
  }

  updateButtonState(true, false, false);

  function start() {
    updateButtonState(false, true, false);
    startbtn.onclick = null;
    stopbtn.onclick = stop;
    startTime = new Date();
    countUp();
  }

  function stop() {
    // タイマーを解除
    clearTimeout(timerId);
    timeToAdd += Date.now() - startTime;
    // clearInterval(timer);
    // Startボタンを有効化する
    updateButtonState(true, false, true);
    startbtn.onclick = start;
    stopbtn.onclick = null;
    resetbtn.onclick = reset;
  }

  function reset() {
    updateButtonState(true, false, false);
    elapsedTime = 0;
    timeToAdd = 0;
    updateTimerText();
    resetbtn.onclick = null;
  }
}