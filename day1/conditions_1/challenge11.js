let prompt = require("prompt-sync")();
let choix = prompt("Choisissez un plat : 1-Pizza, 2-Burger, 3-Tacos, 4-Salade :");
let quantite = prompt("Comme bie de pizza  :");

let plat;
let prix;

switch (choix) {
    case "1":
        plat = "Pizza";
        prix = 60;
        break;

    case "2":
        plat = "Burger";
        prix = 45;
        break;

    case "3":
        plat = "Tacos";
        prix = 40;
        break;

    case "4":
        plat = "Salade";
        prix = 30;
        break;

    default:
        console.log("Choix invalide");
}

let sousTotal = prix * quantite;
let reduction;

if (sousTotal >= 200) {
    reduction = sousTotal * 10 / 100;
} else {
    reduction = 0;
}

let total = sousTotal - reduction;

console.log("choix : " + quantite);
console.log("Plat : " + plat);
console.log("Prix unitaire : " + prix + " DH");
console.log("Sous-total : " + sousTotal + " DH");
console.log("Réduction : " + reduction + " DH");
console.log("Total à payer : " + total + " DH");