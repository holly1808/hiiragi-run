function changeColor() {

    let r = document.getElementById("red").value;
    let g = document.getElementById("green").value;
    let b = document.getElementById("blue").value;

    let texts = document.getElementsByClassName("colorText");

    for (let i = 0; i < texts.length; i++) {
        document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }
}

// R・G・Bの入力が変更されるたびに実行
document.getElementById("red").addEventListener("input", changeColor);
document.getElementById("green").addEventListener("input", changeColor);
document.getElementById("blue").addEventListener("input", changeColor);

changeColor(); // 初期表示のために一度実行

function toggleText(id) {
  const text = document.getElementById(id);

  if (text.style.display === "none" || text.style.display === "") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}