// script.js
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("header-shrink"); // Ajoute la classe quand l'utilisateur défile
    } else {
        header.classList.remove("header-shrink"); // Retire la classe quand l'utilisateur revient en haut
    }
});

const footer = document.getElementById('footer');

// Écoute l'événement de défilement
window.addEventListener('scroll', () => {
  // Vérifie si l'utilisateur a atteint le bas de la page
  const scrollPosition = window.innerHeight + window.scrollY;
  const pageHeight = document.body.offsetHeight;

  if (scrollPosition >= pageHeight) {
    footer.style.display = 'block'; // Affiche le footer
  } else {
    footer.style.display = 'none'; // Cache le footer
  }
});