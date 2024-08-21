const ness = document.getElementById("ness");
const tess = document.getElementById("tess");

function jump() {
  if (ness.classList != "jump") {
    ness.classList.add("jump");

    setTimeout(function () {
      ness.classList.remove("jump");
    }, 300);
  }
}

let isAlive = setInterval(function () {
  // get current ness Y position
  let nessTop = parseInt(window.getComputedStyle(guess).getPropertyValue("top"));

  // get current cactus X position
  let tessLeft = parseInt(
    window.getComputedStyle(tess).getPropertyValue("left")
  );

  // detect collision
  if (tessLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
    // collision
    alert("Game Over!");
  }
}, 10);

document.addEventListener("keydown", function (event) {
  jump();
});
