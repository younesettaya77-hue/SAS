let prompt = require("prompt-sync")();
let F = +prompt("veulliez donner un nombre F :");
let factorielle = 1 ;
for( let i = 1 ; i <= F ; i++){
    factorielle = factorielle * i ;

}
console.log("factorielle  "+F+ "!" + "=" + factorielle);
