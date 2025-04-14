// document.querySelector("#age").innerHTML = getAge("1998-06-17");

const backgroundCarousel = new bootstrap.Carousel("#background-carousel");

async function ChangeAnimation() {
    const character = document.querySelector("#main-character");
    fadeTo(character, 0, 1500);
    await wait(1.5);
    backgroundCarousel.next();
    await wait(1.5);
    const characterPath = document.querySelector(".carousel-item.active img").getAttribute("main-character");
    character.setAttribute("src", characterPath);
    fadeTo(character, 1, 1500);

}

function wait(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}

setInterval(() => {
    ChangeAnimation();
}, 10000);
