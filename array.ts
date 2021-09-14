const salary : number = 6900;
const friendSalaries : number[] = [3300, 8900, 16940];
const friends : string[] = ["khairul", "rafsan", "chamak", "mahfuz"];

friendSalaries[0] = 6300;
friendSalaries.push(13990);

friendSalaries[4] = 7600;

friends.push("Nahid");
friends[3] = "Shadhin";

let max : number = 0;

for(const salary of friendSalaries){
    if(salary > max){
        max = salary;
    }
}
console.log("Array!");