const languageCode = new URLSearchParams(window.location.search).get("lang") || "es";
const language = languageCode === "es" ? esES : enEN;

document.querySelectorAll("*:not(html)[lang]").forEach(element => {
    const lang = element.getAttribute("lang");
    element.innerHTML = language[lang];
})