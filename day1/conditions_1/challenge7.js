let prompt = require("prompt-sync")();
console.log("1 → Lundi");
console.log("2 → Mardi");
console.log("3 → Mercredi");
console.log("4 → Jeudi");
console.log("5 → Vendredi");
console.log("6 → Samedi");
console.log("7 → Dimanche");

let numero = +prompt("veulliez donner un nombre:");
switch (numero) {
  case 1:{
    console.log("numero :"+numero);
    console.log("jour : Lundi");
    break;
  }
  case 2:{
    console.log("numero : "+numero);
    console.log("jour : Mardi") ;
    break;
}
  case 3:{
    console.log("numero :"+numero);
     console.log("jour : Mercredi");
    break;
  }
  case 4:{
    console.log("numero :"+numero);
    console.log(" jour :Jeudi ");
    break;
  }
  case 5 : {
    console.log("numero :"+numero);
    console.log(" jour : Vendredi ");
    break;
  }

  case 6:{
    console.log("numero :"+numero);
    console.log(" jour :Samedi ");
    break;
  }
  
  case 7: {
    console.log("numero :"+numero);
    console.log(" jour :Dimanche ");
    break;
  }
  default : {
    console.log("Numéro invalide.");
  }

}


   