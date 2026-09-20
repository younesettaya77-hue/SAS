let prompt = require("prompt-sync")();
let base = +prompt("veulliez donner un nombre base  :");
let exposant = +prompt("veulliez donner un nombre exposant  :");
console.log("Base :"+ base);
console.log("exposant:"+ exposant);
let i = 1;
let resultat = 1 ;
while(i <= exposant ){
    resultat = resultat* base   ;
  i++;
}
    console.log("le resultat est : "+resultat);


    


