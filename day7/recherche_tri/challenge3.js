let prompt = require("prompt-sync")();
let N = +prompt("veullez entrer un nomber :");
let ids = [2, 7, 11, 15, 23, 34, 45, 58, 61, 70];
function recherchebinaire(id){
    let start = 0 ;
    let end = ids.length -1;
    
    while(start < end ){
        if(ids[start]===id){
            return start;
            
        }
        else if(ids[end]===id){
            return end ; 
        }
        start++;
        end --;
    }
    return -1 ;
}
console.log(recherchebinaire(N));
