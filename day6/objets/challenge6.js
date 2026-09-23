let students = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi"
    }
];
for(let i = 0 ; i <students.length ;i++){
    console.log(students[i]);
}
for(let i = 0 ; i <students.length ;i++){
    console.log(students[i].firstName);

}
for(let i = 0 ; i <students.length ;i++){
    console.log(students[i].age);
}
for(let i = 0 ; i <students.length ;i++){
    console.log(students[i].firstName + " j'ai "+students[i].age + " ans  j'habite a " +students[i].city);
}