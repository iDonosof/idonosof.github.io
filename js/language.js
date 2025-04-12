let language = navigator.language.match(/es(-ES)?/) ? esES : enEN;

document.querySelectorAll("*:not(html)[lang]").forEach(element => {
    const lang = element.getAttribute("lang");
    element.innerHTML = language[lang];
})