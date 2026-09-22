let prompt = require("prompt-sync")();
function estPalindrome(chaine){
    let inverse="";
    for (let i = 0 ; i < chaine.length; i++){
        inverse += chaine[chaine.length -1-i];
}
if(inverse === chaine)
    return true ; 
else
    return false ;
}
let texte = prompt("donner un mot :");
let x = estPalindrome(texte);
console.log(x);
