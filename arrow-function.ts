// simple function
function addition(num1: number, num2: number): number{
    return num1 + num2;
}
// arrow function
const addition2 = (num1: number, num2: number): number => num1 + num2;

// multiLine arrow
const doMath = (num1: number, num2: number): void => {
    console.log(num1 * num2);
}

console.log("arrow!");