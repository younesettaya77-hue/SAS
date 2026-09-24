let prompt = require("prompt-sync")();
console.log(" 1 : rechercher par id .");
console.log(" 2 : rechercher par name .");
console.log(" 3 : rechercher par category .");
console.log(" 4 : rechercher par price .");

let products = [
    {
        id: 1,
        name: "Laptop",
        category: "Informatique",
        price: 7500
    },
    {
        id: 2,
        name: "Phone",
        category: "Smartphone",
        price: 3500
    },
    {
        id: 3,
        name: "Keyboard",
        category: "Informatique",
        price: 500
    },
    {
        id: 4,
        name: "Monitor",
        category: "Informatique",
        price: 2200
    }
];




let choix = +prompt("veuillez entrer un seul choix :");
if (choix === 1) {
    let Nmr1 = +prompt("veillez entrer un id :");
    console.log(rechercherParid(Nmr1));
}
else if (choix === 2) {
    let nom1 = prompt("entrer nom de son produit : ");
    console.log(rechercherParNom(nom1));
}
else if (choix === 3) {
    let category1 = prompt("entrer category :");
    let result = rechercherParcategory(category1);
    for(i=0 ;i<result.length ;i++){
        console.log(result[i]);
    }

}
else if (choix === 4) {
    let prix1 = +prompt("entrer prix de son produit : ");
    console.log(rechercherParprix(prix1));
}
else {
    console.log("le choix incorrect :");

}




function rechercherParid(id) {
    for (let i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            return `id ${products[i].id}\nname : ${products[i].name}\ncategory : ${products[i].category}\nprice : ${products[i].price}`
        }
    }
    return "no id";
}

function rechercherParNom(name) {
    for (let i = 0; i < products.length; i++) {
        if (name === products[i].name) {
            return `id ${products[i].id}\nname : ${products[i].name}\ncategory : ${products[i].category}\nprice : ${products[i].price}`
        }
    }
    return "no name";
}


function rechercherParprix(price) {
    for (let i = 0; i < products.length; i++) {
        if (price === products[i].price) {
            return `id ${products[i].id}\nname : ${products[i].name}\ncategory : ${products[i].category}\nprice : ${products[i].price}`
        }
    }
    return "no price ";
}
function rechercherParcategory(category) {
    let res = [];
    for (let i = 0; i < products.length; i++) {
        if (category === products[i].category) {
            res[res.length] = `id ${products[i].id}\nname : ${products[i].name}\ncategory : ${products[i].category}\nprice : ${products[i].price}`
    
        }
    }
    return res;
}