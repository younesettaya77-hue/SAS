let prompt = require("prompt-sync")();
let age = +prompt("veulliez donner Age :");
if ( age >= 18 ){
    console.log("Age :"+age);
    console.log("Accès autorisé");
}  
else if(age < 18){
     console.log("Age :"+age);
    console.log(" Accès refusé");

}
