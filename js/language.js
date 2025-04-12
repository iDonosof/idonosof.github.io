let language = navigator.language.match(/es(-ES)?/) ? esES : enEN;

document.querySelectorAll("*[lang]").forEach(element => {
    const lang = element.getAttribute("lang");
    element.innerHTML = language[lang];
})