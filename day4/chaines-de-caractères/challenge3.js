let prompt = require("prompt-sync")();
function inverserChaine(texte){
    let inverse="";
    for (let i = 0 ; i < texte.length; i++){
        inverse += texte[texte.length -1-i];
}

        return inverse ;
}
let texte = prompt("donner un text :");
console.log(inverserChaine(texte));


