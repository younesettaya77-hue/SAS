let prompt = require("prompt-sync")();
let  Durée  = prompt("donner moi la Duréeen DE Film:");
if(Durée <= 60){
  console.log("Court métrage");  
}

else if(Durée >= 60 &&  Durée <=120){
    console.log("Film standard");
}
  
 else if (Durée >=120){
    console.log("Film long");
 }




