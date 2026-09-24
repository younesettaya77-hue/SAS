

let voiteur = [
    {
        marque: "dacia",
        category: "vs",
        price: 75000,
        kilométrage: 200000,
        disponibilité: true
    },
    {
        marque: "volvo",
        category: "vs",
        price: 26000,
        kilométrage: 365000,
        disponibilité: false
    },
    {
        marque: "ford",
        category: "sedane",
        price: 55000,
        kilométrage: 256000,
        disponibilité: true

    },
    {
        marque: "nissan",
        category: "berlin",
        price: 44000,
        kilométrage: 120000,
        disponibilité: false
    }
];
function disponibilité(voiteur) {
    let compteur1 = 0;
    for (let i = 0; i < voiteur.length; i++) {
        if (voiteur[i].disponibilité === true) {
            compteur1++;
           

        }

    }
     return compteur1;
}
function moyenne(voiteur) {
    let moyenne = 0;
    let compteur2 = 0;
    for (let i = 0; i < voiteur.length; i++) {
        if (voiteur[i].disponibilité === true) {
            moyenne += (voiteur[i].price);
            compteur2++;
        }
    }
     return (moyenne / compteur2);
}
function rechercherParcategory(catey) {
    let compteur3 = 0;
    for (let i = 0; i < voiteur.length; i++) {
        if (catey === voiteur[i].category && voiteur[i].disponibilité === true) {
            compteur3++;
        }
    }
return compteur3;
} 
function ajjouter(voiteur){
for(let i = 0 ; i<voiteur.length ; i++){
    
}


}
console.log("voilla le nomber de voiteur disponible : "+disponibilité(voiteur));
console.log("la moyenne de moyenne de prix des voiteur disponible : "+moyenne(voiteur));
console.log("rechercher le nomber de voiteur avec une  cateygore et disponible : "+rechercherParcategory("vs"));

