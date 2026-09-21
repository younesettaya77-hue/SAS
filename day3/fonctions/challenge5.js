let prompt = require("prompt-sync")();
exit = [];
let sum = 0;
function additiontout(...args){
     /*   for(args of args){
        sum += args ;
    }
    return sum  ;

    */
   sum = args.reduce((total , i ) => i + total , 0);
   return sum ;
}
do{
    exit[exit.length] = +prompt("entrer :");
}while(exit[exit.length -1] != 0)
console.log(additiontout(...exit));