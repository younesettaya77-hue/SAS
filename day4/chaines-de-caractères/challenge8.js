
function extraireChaine(chaine, debut, fin){
    resultat = "";
    for(let i = 0 ; i<chaine.length ; i++){
        resultat +=chaine[debut]+chaine[fin];

    }
    return resultat ;

}
console.log(extraireChaine(javascript, 0, 4));