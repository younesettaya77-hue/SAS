let temperatures = [22, 19, 30, 15, 28, 17, 25];
let compteur = 0;
function ordredécroissante(){
    for(let i=0; i<temperatures.length ;i++){
    for(let j=0; j<temperatures.length ; j++){
        if(temperatures[j] < temperatures[j+1]){
          let chan = temperatures[j];
           temperatures[j] = temperatures[j+1];
           temperatures[j+1] = chan;
           compteur++;
        }
    }
}
    return temperatures;
}
console.log(ordredécroissante());
console.log("nomber de changes : "+compteur);