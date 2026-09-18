let prompt = require("prompt-sync")();
console.log("1 → Bus");
console.log("2 → Train");
console.log("3 → Tramway");
console.log("4 → Taxi");
console.log("5 → Vélo");
let choix = +prompt("veulliez selectioner un seul choix:");
switch (choix){
case 1:{
       console.log("choix : "+choix);
       console.log("Transport : Bus");
       console.log("Prix : 10 dh");
break;
}
case 2: {
       console.log("choix : "+choix);
       console.log("Transport : Train");
       console.log("Prix : 10 dh");
break;
}
case 3: {
    console.log("choix : "+choix);
    console.log("Transport : Tramway");
    console.log("Prix : 10 dh");
break;
}
case 4: {
      console.log("choix : "+choix);
      console.log("Transport : Taxi");
      console.log("Prix : 10 dh");
break;
}
case 5: {
      console.log("choix : "+choix);
      console.log("Transport : Vélo");
      console.log("Prix : 10 dh");
break;
}
default : {
      console.log("transport invalid :");
      
}

}