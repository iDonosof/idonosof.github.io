const splide = new Splide(".menu-slide.splide", {
    type: "loop",
})
    .on("move", function (newIndex) {
        const element = document.querySelector(`#splide02-slide0${newIndex + 1}`);
        SelectOption(newIndex);
    })
    .mount();

new Splide(".splide.projects-slide", {
    type: "loop",
}).mount();

document.querySelector("#age").innerHTML = getAge("1998-06-17");

document.querySelectorAll("button.option").forEach((button) =>
    button.addEventListener("click", (e) => {
        const option = e.target.tagName === "SPAN" ? e.target.parentElement.getAttribute("value") : e.target.getAttribute("value");
        SelectOption(parseInt(option));
    })
);

function SelectOption(optionValue) {
    document.querySelector(".menu-option.active").classList.remove("active");
    document.querySelector(`.menu-option[menu-option="${optionValue}"]`).classList.add("active");
    splide.go(optionValue);
    //Update character image
    //Update character background
}
