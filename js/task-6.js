"use strict";

console.log('============Завдання 6============');

let input;
const numbers = [];
let total = 0;

while ((input = prompt("number", ""))) {
  if (input === "" || isNaN(input)) {
    alert("it`s not number, try again !");
    continue;
  }
  numbers.push(+input);


}

for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}

console.log(total);
