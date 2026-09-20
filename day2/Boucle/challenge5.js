let prompt = require("prompt-sync")();
let N = +prompt("veulliez donner un nombre  N :");
let x = +prompt("veulliez donner un autre  nombre X :");
console.log("nomber : " + N);
console.log("nomber : " + x); 
let C = 0; 
for( let i=x; i <= N ; i=i +x ){
    console.log(i);
    C++;

     

}
console.log("nomber des multiples est :"+ C);

