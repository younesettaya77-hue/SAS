let prompt = require("prompt-sync")();
let code = +prompt("donner moi le code de qatre chiffre  : ");
let premier_chiffre = (code - (code % 1000)) /1000;
let Deuxième_chiffre = ((code % 1000) - (code % 100))/100 ;
let Troisième_chiffre = ( (code % 100)- (code % 10)) /10;
let Quatrième_chiffre = ( code % 10);
console.log("code :"+code);
console.log("premier_chiffre :" +premier_chiffre);
console.log("Deuxième_chiffre :" +Deuxième_chiffre);
console.log("Troisième_chiffre :" +Troisième_chiffre);
console.log("Quatrième_chiffre : " +Quatrième_chiffre);

