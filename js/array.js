"use strict";
const salary = 6900;
const friendSalaries = [3300, 8900, 16940];
const friends = ["khairul", "rafsan", "chamak", "mahfuz"];
friendSalaries[0] = 6300;
friendSalaries.push(13990);
friendSalaries[4] = 7600;
friends.push("Nahid");
friends[3] = "Shadhin";
let max = 0;
for (const salary of friendSalaries) {
    if (salary > max) {
        max = salary;
    }
}
console.log("Array!");
