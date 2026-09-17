let prompt = require("prompt-sync")();
let note_cc = +prompt("donner moi la note de Contrôle continu : ");
let note_P = +prompt("donner moi la note de Projet : ");
let note_E = +prompt("donner moi la note d`Examen : ");
note_finale = ((note_cc * 2) + (note_P * 3) + (note_E * 5)) / 10
console.log("Contrôle continu: "+ note_cc);
console.log("Projet: "+note_P);
console.log("Examen: "+ note_E);
console.log("note finale : "+ note_finale);


