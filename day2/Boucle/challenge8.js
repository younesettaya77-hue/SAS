let prompt = require("prompt-sync")();
let N = +prompt("veulliez donner un nombre de mission terminer :");
console.log("nomber de mission est :" +N);
let score =0;
let i = 1;
while(i<=N){
    score+= 100;
    console.log("Mission" +  i+ " → Score :"+ score);
    i++;
}