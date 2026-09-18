let prompt = require("prompt-sync")();
let note= +prompt("veulliez donner note:");
if(note >= 10 && note <= 20){
    console.log("Note:" +note);
     console.log("Admis:" );
}
else if (note < 10 && note >= 0 ){
    console.log("Note:" +note);
     console.log("Non Admis:" );
}
else 
    
     console.log("Impossible:" )


