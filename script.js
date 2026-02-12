const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

if (yesBtn) {
  yesBtn.addEventListener("click", () => {
    window.location.href = "disclaimer.html";
  });
}

if (noBtn) {
  function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * maxX + "px";
    noBtn.style.top = Math.random() * maxY + "px";
  }

  noBtn.addEventListener("mouseover", moveButton);
  noBtn.addEventListener("touchstart", moveButton);
}
