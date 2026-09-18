let prompt = require("prompt-sync")();
console.log("1 → Afficher le profil");
console.log("2 → Afficher les paramètres");
console.log("3 → Afficher les notifications");
console.log("4 → Se déconnecter");
let choix= +prompt("veulliez donner une choix:");
switch (choix) {
  case 1:{
    console.log("choix :"+choix);
    console.log("Afficher le profil");
    break;
  }
  case 2:{
    console.log("choix : "+choix);
    console.log("Afficher les paramètres") ;
    break;
}
  case 3:{
    console.log("choix :"+choix);
     console.log("Afficher les notifications");
    break;
  }
  case 4:{
    console.log("choix :"+choix);
    console.log(" Se déconnecter");
    break;
  }
default:{
    console.log("choix invalide:");
}

}
   