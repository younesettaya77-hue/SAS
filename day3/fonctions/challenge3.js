let prompt = require("prompt-sync")();
let nom = prompt("veulliez donner le nom  :");
let prenom = prompt("veulliez donner le prenom :");
function genererEmail( prenom , nom){
    return `${prenom.toLowerCase()}.${nom.toLowerCase()}@entreprise.com` ;

}
console.log(genererEmail(prenom , nom));