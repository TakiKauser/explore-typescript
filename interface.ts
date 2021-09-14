interface Player {
    name: string,
    club?: string,
    salary: number,
    country: string,
    previousClubs?: string[]
}

const ronaldo: Player = {
    name: "Cristiano Ronaldo",
    club: "Manchester United",
    salary: 22500000,
    country: "Portugal",
    previousClubs: ["Real Madrid", "Juventas"]
}
const vettori: Player = {
    name: "Daniel Vettori",
    salary: 1500000,
    country: "New Zealand"
}

interface Employee {
    name?: string,
    designation?: string,
    salary?: number,
    age?: number
}

interface Developer extends Employee {
    language: string,
    codeEditor: string,
    typeSpeed: number
}

const kb : Developer = {
    language: "javascript",
    codeEditor: "VS Code",
    typeSpeed: 37,
    age: 31,
    salary: 79300,
    designation: "Senior Dev"
}

console.log("interface!");