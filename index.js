console.log("working");

//Problem 1
let studentRecords = [{name:"John",id:123,marks:98},
    {name:"Baba",id:101,marks:23},
    {name:"yaga",id:200,marks:45},
    {name:"Wick",id:115,marks:75}
];

let arr = studentRecords.map(x => x.name.toUpperCase());
console.log(arr);


//Problem 2

let arr1 = studentRecords.filter(x => x.marks > 50);
console.log(arr1);

//Problem 3
let arr2 = studentRecords.filter((x) =>x.marks > 50 && x.id>120);
console.log(arr2);

//Problem 4

let arr3 = studentRecords.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr3);

// Problem 5
let arr4 = studentRecords.filter(x => x.marks > 50);
for(let i = 0; i<arr4.length; i++){
    console.log(arr4[i].name);
}

//Problem 6
let arr5 = studentRecords.filter(x => x.id > 120);
let arr6 = arr5.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr6);

//Problem 7

for(let x of studentRecords){
    if(x.marks<50){
        
        x.marks = x.marks + 15;
    }
}

let arr7 = studentRecords.filter(x => x.marks > 50);
let arr8 = arr7.reduce((accu, curr) => accu + curr.marks,0);
console.log(arr8);


//Problem 8

const obj1 = {
    name : "Apple",
    class :"1-st Std",
    roll_no : 01
}
const obj2 = {
    name : "Bat",
    class :"2-nd Std",
    roll_no : 02
}
const obj3 = {
    name : "Cat",
    class :"3-rd Std",
    roll_no : 03
}
const obj4 = {
    name : "Dog",
    class :"4-th Std",
    roll_no : 04
}
const obj5 = {
    name : "Elephant",
    class :"5-th Std",
    roll_no : 05
}
const obj6 = {
    name : "Fish",
    class :"6-th Std",
    roll_no : 06
}
let array = [{...obj1},{...obj2},{...obj3},{...obj4},{...obj5},{...obj6}];
console.log(array);

