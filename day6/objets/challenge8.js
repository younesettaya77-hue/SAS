let prompt = require("prompt-sync")();
let students = [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Sara", age: 22 },
    { id: 3, name: "Omar", age: 19 },
    { id: 4, name: "Imane", age: 21 }
];  
let id = +prompt("entrer le nombre de l'etudiant :");



function rechercherEtudiant(id){
    for(let i= 0 ;i<students.length ;i++){
        if(id ===students[i].id ){
            return `id ${students[i].id}\nnom : ${students[i].name}\nAge : ${students[i].age}`   
        }
    }
    return "no id"
}

console.log(rechercherEtudiant(id));

return;

console.log(he)


let he = 1234;
      


