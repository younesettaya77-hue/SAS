let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
console.log("firstName est : "+employee.firstName);
console.log("lastName est : "+employee.lastName);
console.log("le salaire se base est : "+employee.salary);
console.log("le bonus est : "+employee.bonus);
let pinalites = (employee.absenceDays)*200 ;
console.log("les pénalites est : "+pinalites)
let safinal = (employee.salary + employee.bonus)-pinalites ;
console.log("salaire final est : "+safinal);
