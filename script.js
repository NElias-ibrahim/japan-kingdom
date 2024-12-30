// script.js
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("header-shrink"); // Ajoute la classe quand l'utilisateur défile
    } else {
        header.classList.remove("header-shrink"); // Retire la classe quand l'utilisateur revient en haut
    }
});