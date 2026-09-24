let notes = [1, 5, 19, 30, 27, 8, 14];
function ordrecroissante(){
    for(i=0; i<notes.length ;i++){
    for(j=0; j<notes.length -1 ; j++){
        if(notes[j] > notes[j+1]){
          let chan = notes[j];
           notes[j] = notes[j+1];
           notes[j+1] = chan ;
        }
    }
}
    return notes;
}
console.log(ordrecroissante());


