document.querySelectorAll("button.option").forEach(button => button.addEventListener("click", e => {
    const option = e.target.tagName === "SPAN" ? e.target.parentElement.getAttribute("value") : e.target.getAttribute("value");
    document.querySelector(".menu-option.active").classList.remove("active");
    document.querySelector(`.menu-option[menu-option="${option}"]`).classList.add("active");
}));