let prompt = require("prompt-sync")();
let motDePasse = prompt("veulliez donner le mot De Passe  :");
function verifierMotDePasse(motDePasse){
    if( motDePasse.length >= 8 && motDePasse.includes("@)"){
        return true;
    }
    else {   
             return false ;
}
}
console.log(verifierMotDePasse(motDePasse));
