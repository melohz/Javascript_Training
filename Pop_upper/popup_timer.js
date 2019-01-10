window.onload = function() {
  var alertbtn = document.getElementById("alertPopup");
  var promptbtn = document.getElementById("promptPopup");
  var confirmbtn = document.getElementById("confirmPopup");

  alertbtn.onclick = alertPopup;
  promptbtn.onclick = promptPopup;
  confirmbtn.onclick = confirmPopup;
}

var d = new Date();
function alertPopup() {
  console.time();
  var res = alert(d.toLocaleString());
  res;
  console.timeEnd();
}

function promptPopup() {
  console.time();
  var res = prompt("Input your name");
  console.log(res);
  console.timeEnd();
}

function confirmPopup() {
  console.time();
  var res = confirm("Choose option");
  console.info(res);
  console.timeEnd();
}