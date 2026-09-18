let prompt = require("prompt-sync")();
let Number= +prompt("veulliez donner un nombre :");
if (Number < 0){
    console.log("Numbre:" +Number);
     console.log("Le nombre est négatif:" );   
     return;
}

else if (Number > 0){
    console.log("Numbre:" +Number);
     console.log("Le nombre est positif:" );
    return; 
}

    console.log("Numbre:"+ "="+0);
    console.log("Le nombre est égal à zéro:" );


