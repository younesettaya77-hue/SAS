let prompt = require("prompt-sync")();
let N = +prompt("veulliez donner un nombre :");
totale=0; 
for( let i = 1 ; i <=N ; i++){
    totale += 125 - (125*(i-1)*2)/100
   
}

console.log("totale est :"+ totale);