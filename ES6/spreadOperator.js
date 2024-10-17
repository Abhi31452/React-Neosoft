let stud={
    studId:32,
    studName:'Abhi'
}

let neoStud = stud;

console.log(neoStud==stud);console.log(neoStud===stud);


neoStud={...stud};
// console.log("neo",neoStud);
console.log(stud);

neoStud1={...stud ,studId:123,studperc:90};
console.log(neoStud1);


