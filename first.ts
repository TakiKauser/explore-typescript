const number = 9;
console.log("typescript!", number, "takiKauser");
/* 
let money = 999;
let moneyy = "";
let moneyyy = false;
 */

let money: number = 399;
let amount: string = "three hundred ninty nine";
let availability: boolean = false;

function add(first: number, second: number): string{
    const result = first + second;
    return result + "";
}
const output: string = add(9, 8);

function doubleConsole(num1: number): void{
    console.log(2 * num1);
    // return num1 * 2;
}

/* 
// multi purpose
function add(first: number | string, second: number | string): number | string{
    const result : number | string = first + second;
    return result + "";
}
const output1: number = add(9, 8);
const fullName: string = add("taki", "kauser");
 */