let prompt = require("prompt-sync")();
let ageHumain = +prompt("veulliez donner un humain  :");
function calculerAgeChien(ageHumain){
    
    return ageHumain * 7 ;

}
console.log("Age chien est = " +calculerAgeChien(ageHumain));