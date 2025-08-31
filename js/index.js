const CHANGE_ANIMATION_INTERVAL = 10000;
const FADE_IN_DURATION = 1000;
const backgroundCarousel = new bootstrap.Carousel("#background-carousel");
let touchXAxis = 0;

const images = [
    {
        name: "MainCharacter",
        src: "img/characters/MainCharacter.png",
        hideSpinner: true,
    },
    {
        name: "BackgroundNightJapan",
        src: "img/backgrounds/BackgroundNightJapan.gif",
    },
    {
        name: "BackgroundRainStore",
        src: "img/backgrounds/BackgroundRainStore.gif",
    },
    {
        name: "MainCharacterBeach",
        src: "img/characters/MainCharacterBeach.png",
    },
    {
        name: "BackgroundRain",
        src: "img/backgrounds/BackgroundRain.gif",
    },
    {
        name: "MainCharacterSuit",
        src: "img/characters/MainCharacterSuit.png",
    },
];

document.addEventListener("DOMContentLoaded", () => {
    LoadNextImage(images.shift());
    document.querySelector("#projects-section").addEventListener(
        "touchstart",
        (e) => {
            touchXAxis = e.screenX;
        },
        false
    );
    document.querySelector("#projects-section").addEventListener(
        "touchmove",
        (e) => {
            if (e.screenX < touchXAxis) {
                new bootstrap.Carousel("#projects-carousel").next();
            } else if (e.screenX > touchXAxis) {
                new bootstrap.Carousel("#projects-carousel").prev();
            }
        },
        false
    );
});

function LoadNextImage(imageInfo) {
    image = document.querySelector(`img[name="${imageInfo.name}"]`);
    image.src = imageInfo.src;
    image.onload = () => {
        if (images.length > 0) {
            if (imageInfo.hideSpinner) HideSpinner();
            return LoadNextImage(images.shift());
        }
        StartBackgroundAnimation();
    };
}

function HideSpinner() {
    document.querySelector("#spinner").style.display = "none";
    document.body.style.overflow = "auto";
}

function StartBackgroundAnimation() {
    setInterval(() => {
        ChangeAnimation();
    }, CHANGE_ANIMATION_INTERVAL);
}

async function ChangeAnimation() {
    const character = getActiveCharacter();
    document.querySelector("#background-carousel").addEventListener(
        "slid.bs.carousel",
        async () => {
            fadeIn(getNextCharacter(character), FADE_IN_DURATION);
        },
        { once: true }
    );
    await fadeOut(character, FADE_IN_DURATION);
    backgroundCarousel.next();
}

function getActiveCharacter() {
    return Array.from(document.querySelectorAll(".main-character")).find((e) => e.style.display !== "none");
}

function getNextCharacter(character) {
    const index = Array.from(document.querySelectorAll(".main-character")).indexOf(character);
    return Array.from(document.querySelectorAll(".main-character"))[index + 1] ?? document.querySelector(".main-character");
}
