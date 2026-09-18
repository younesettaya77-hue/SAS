let prompt = require("prompt-sync")();
console.log("A → Électronique");
console.log("B → Vêtements");
console.log("C → Alimentation");
console.log("D → Maison");
console.log("E → Sport");
let code = prompt("veulliez selectioner un seul code:");
switch (code){
 case 'A' : {
    console.log("code :"+code);
    console.log("Catégorie : Électronique");
    console.log("A → Électronique → Smartphone");
    break; 
 }
 case 'B' : {
    console.log("code :"+code);
    console.log("Catégorie : Vêtements");
    console.log("B → Vêtements → T-shirt");
    break; 
 }  
 case 'C' : {
    console.log("code :"+code);
    console.log("Catégorie : Alimentation");
    console.log("C → Alimentation → Pain");
    
    break; 
 }
 case 'D': {
    console.log("code :"+code);
    console.log("Catégorie : Maison");
    console.log("D → Maison → Chaise");
    
    break; 
 }
 case 'E' : {
    console.log("code :"+code);
    console.log("Catégorie : Sport");
    console.log("E → Sport → Ballon");
    
    break; 
 }
 default : 
    console.log("invalide :");
    
 
 }
 

