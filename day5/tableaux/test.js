let tab = [10 , 3 , 5, 1 , 2 , 7 , 15];
let A =[];
let B = [];

for (let i = 0 ; i < tab.length; i++){
    if( (tab[i] % 2) !=    0){
        A[A.length] = tab[i];//A.push(tab[i]);
     }
     
      if(tab[i] % 3 == 0){
           B[B.length] = tab[i];
      }
        
     }
     console.log( A);
     console.log(B);
     
     if(A.length>B.length){
        console.log("les impaire plus que les mu...de 3");
        
     }
     else{
      console.log("les multiplirtaue de 3 plus que les impaire");
        
     }
      







