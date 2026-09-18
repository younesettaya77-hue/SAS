let prompt = require("prompt-sync")();
console.log("les operateur qui disponible est :");
console.log("+");
console.log("*");
console.log("-");
console.log("/");
let numero_1 = +prompt("veulliez donner un nombre:");
let operateur = prompt(" veillez entrer un operateur:")
let numero_2 = +prompt("veulliez donner un nombre:");
switch (operateur){
  case "+":{
    Resultat = +numero_1 + +numero_2 
    console.log("numero_1 :"+numero_1);
    console.log("operateur : + ");
    console.log("numero_2:"+numero_2);
    console.log("resultat :"+Resultat);
    break;
  }
  case "*":{
    Resultat = +numero_1 *  +numero_2
    console.log("numero_1 :"+numero_1);
    console.log("operateur : * ");
    console.log("numero_2:"+numero_2);
    console.log("resultat :"+Resultat);
    break;
}
  case "-":{
    Resultat = +numero_1 - +numero_2
   console.log("numero_1 :"+numero_1);
    console.log("operateur : -");
    console.log("numero_2:"+numero_2);
    console.log("resultat :"+Resultat );
    break;
  }
  case "/":{
    Resultat = +numero_1 / +numero_2
    if(+numero_2 ==0){
        console.log("numero_1 :"+numero_1);
        console.log("operateur : / ");
        console.log("numero_2:"+numero_2);
        console.log("impossible");
    }
        else {
    console.log("numero_1 :"+numero_1);
    console.log("operateur : / ");
    console.log("numero_2:"+numero_2);
    console.log("resultat :"+Resultat);
        }
    break;
  }
  
  }

  

   