let prompt = require("prompt-sync")();
function convertirMontant(montat ,taux , formatter){
     let resultat= montat * taux ;
     
     return formatter(resultat);
     
}
const formatter = (val) => val + " DH"
   //  { val+=1   return val + " DH"; }
 //function fr(val){  return val + " DH";}
let R = +prompt("veulliez donner montant  :");
console.log(convertirMontant(R , 10.50,formatter));

