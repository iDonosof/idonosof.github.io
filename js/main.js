// document.querySelector("#age").innerHTML = getAge("1998-06-17");

const backgroundCarousel = new bootstrap.Carousel("#background-carousel");

async function ChangeAnimation() {
  const character = getActiveCharacter();
  document.querySelector("#background-carousel").addEventListener("slid.bs.carousel", async () => {
    fadeIn(getNextCharacter(character), 1000);
  }, { once: true });
  await fadeOut(character, 1000);
  backgroundCarousel.next();
}

function getActiveCharacter() {
  return Array.from(document.querySelectorAll(".main-character")).find(e => e.style.display !== "none");
}

function getNextCharacter(character) {
  const index = Array.from(document.querySelectorAll(".main-character")).indexOf(character);
  return Array.from(document.querySelectorAll(".main-character"))[index + 1] ?? document.querySelector(".main-character");
}

setInterval(() => {
  ChangeAnimation();
}, 10000);
