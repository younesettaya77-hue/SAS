let prompt = require("prompt-sync")();


function saluerClient(nom , titre = "Client" ){
    return  `bonjour ${titre} ${nom} `;

}
let nom = prompt("veulliez donner le nom  :");
let titre= prompt("veulliez donner le titre  :");
if(titre ==""){
console.log(saluerClient(nom ));
}
else{
console.log(saluerClient(nom , titre ));

}




