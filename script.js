const core = document.getElementById("coreValue");
const load = document.getElementById("load");
const focus = document.getElementById("focus");
const loadBar = document.getElementById("loadBar");
const focusBar = document.getElementById("focusBar");
const logs = document.getElementById("logList");

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

setInterval(() => {
  const coreVal = random(60, 95);
  const loadVal = random(20, 90);
  const focusVal = random(40, 100);

  core.innerText = coreVal + "%";
  load.innerText = loadVal + "%";
  focus.innerText = focusVal + "%";

  loadBar.style.width = loadVal + "%";
  focusBar.style.width = focusVal + "%";

  addLog(`Neural sync at ${random(92,99)}% efficiency`);
}, 1500);

function addLog(text) {
  const li = document.createElement("li");
  li.innerText = "› " + text;
  logs.prepend(li);

  if (logs.children.length > 6) {
    logs.removeChild(logs.lastChild);
  }
}
