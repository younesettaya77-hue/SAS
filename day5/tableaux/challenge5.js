let prompt = require("prompt-sync")();
let tab = ["alnif","marakech","saghro","tinghir"];
let Nome = prompt("veulliez ajouter le nome de ville :");
let test = false;
for (let i = 0 ; i < tab.length ; i++){
    if(Nome === tab[i]){
        test = true;
        
    }
}
console.log(test);