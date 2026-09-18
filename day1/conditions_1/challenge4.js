let prompt = require("prompt-sync")();
let montant= +prompt("veulliez donner le montant:");
if(montant >= 500 ){
    console.log("laivrision : gratuit");
    console.log("Total à payer :"+ montant);
}
else if(montant < 500 && montant >0) {
    console.log("laivrision : 40 DH");
    montant =( montant + 40)
    console.log("Total à payer :"+ montant );
    }
else {
    console.log("impossible  :" );

}
