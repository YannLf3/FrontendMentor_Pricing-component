const toggle = document.querySelector("input[name='btnToggle']");
const prices = document.querySelectorAll(".container__cards-cardPricing");

toggle.addEventListener("change", () => {
  // .checked renvoie true si le bouton est activé, false sinon
  console.log("Le toggle est coché ?", toggle.checked);

  prices.forEach((price) => {
    // 1. On vérifie l'état du toggle
    if (toggle.checked) {
      // 2. On récupère la valeur mensuelle stockée dans le HTML
      price.innerText = `${price.dataset.monthly}`;
    } else {
      // 3. On récupère la valeur annuelle
      price.innerText = `${price.dataset.yearly}`;
    }
  });
});
