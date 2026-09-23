let prompt = require("prompt-sync")();
console.log("1 : affichier le solde ");
console.log("2 : deposer un montat ");
console.log("3 : retirer un montat ");
console.log("4 : verifier le solde ");
console.log("5 : affichies les information ");
let choix = +prompt("veulliez selectionner un choix :");

let account = {
    name: "Tayeb",
    solde: 5000,
    type: "saving" 
}; 
if(choix ===1 ){
function affichier(obj){
    console.log("le solde est : "+obj.solde);
   }
   affichier(account);
}
else if (choix === 2){ 
    let montan1 = +prompt("veuillez entrer un montat tu vu deposer  :");
function deposer(obj, montat){
    obj.solde = obj.solde + montat
    console.log("neveau solde apres deposer : "+obj.solde)
   }
    deposer(account, montan1);
}
else if(choix === 3){
    let montan2 = +prompt("veuillez entrer un montat tu vu retirer  :");
    function retirer(obj , montat){
        if(montat > obj.solde){
            console.log("impossible de retirer")

        }else{
            obj.solde = obj.solde - montat
        console.log("neveau solde apres retirer : "+obj.solde);
        }
        
    }
    retirer(account, montan2);
}
else if(choix ===4 ){
     function verifier(obj){
        if(obj.solde > 0 )
            console.log("les solde est sufisant" );
        else 
               console.log("les solde est insufisant" );
    }
   verifier(account);
}
else if(choix ===5){
 function affichieinfo(obj){
    console.log("name : "+obj.name);
    console.log("solde : "+obj.solde);
    console.log("type : "+obj.type);
   }
   affichieinfo(account);
}
else 
    console.log("incorrect");
   
   
    
   
  





