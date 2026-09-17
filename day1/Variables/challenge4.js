let prompt = require("prompt-sync")();
let kilomètres = prompt("donner moi la distance :");
let litres =prompt("donner moi La quantité de carburant :");
Consommation = (litres / kilomètres) * 100;
console.log("la consomatin moyenne est :" + Consommation.toFixed(2) + "l/100 Km");