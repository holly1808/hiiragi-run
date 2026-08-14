const text = document.getElementById("rainbowText");
let hue = 0;

function changeColor() {
  text.style.color = `hsl(${hue}, 100%, 50%)`;
  hue = (hue + 1) % 360;
}

setInterval(changeColor, 20);