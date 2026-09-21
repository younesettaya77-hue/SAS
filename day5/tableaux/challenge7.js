let tab = [4 , 8 , 3, 2 , 5];
let A=[];
for(let i = 0 ;i< tab.length ; i++){
    if( tab[i] % 2 === 0){
        A[A.length] = tab[i];
    }
}
console.log("tableaux des nomber pairs :");
console.log( A);