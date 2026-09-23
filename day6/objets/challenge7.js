let students = [
    { name: "Ali", note: 15 },
    { name: "Sara", note: 8 },
    { name: "Omar", note: 17 },
    { name: "Imane", note: 11 },
    { name: "Yassine", note: 6 }
];
let compteur1 = 0 ;
let compteur2 = 0 ;
for(let i= 0 ;i<students.length ;i++){
    console.log(students[i].name + " : "+students[i].note);
    if(students[i].note >= 10){
        console.log("admis ");
        compteur1 ++;
    }else {
        console.log("non admis ");
        compteur2 ++;
 }


}
console.log("les etudiant qui sont admis est : "+compteur1);
console.log("les etudiant qui sont pas admis est : "+compteur2);