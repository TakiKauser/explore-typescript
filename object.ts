const city : string = "Dhaka";
const fruits : string[] = ["mango", "banana", "melon"];

// objects
/* 
const student: {name: string, department: string, age: number, salary: number} = {
    name : "kb",
    department: "CSE",
    age: 27,
    salary: 13300
} */

// type define
type Person = {
    name: string, 
    department: string, 
    age: number, 
    salary: number
};

const student: Person = {
    name : "kb",
    department: "CSE",
    age: 27,
    salary: 13300
}


const employee: Person = {
    name : "kb junior",
    department: "web dev",
    age: 28,
    salary: 37300
}

console.log("object!");