var openBtn = document.querySelector(".open-modal");
var dialog = document.querySelector(".dialog-box");
var closeBtn = document.querySelector(".close-modal");

openBtn.addEventListener("click", () => {
  dialog.style.display = "block";
  openBtn.style.display = "none";
  document.body.style.backgroundColor = "lightgray";
});

closeBtn.addEventListener("click", (event) => {
  if (event.target === closeBtn) {
    dialog.style.display = "none";
    openBtn.style.display = "block";
    document.body.style.backgroundColor = "white";
  }
});
