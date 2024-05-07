"use strict";

const userEvenOdd = prompt("Scegli pari o dispari");
const userNumber = Number(prompt("Scegli un numero da 1 a 5"));
const pcNumber = randomNumber();

function randomNumber() {
  let random = Math.floor(Math.random() * 5 + 1);
  return random;
}

console.log(userEvenOdd);
console.log(userNumber);
console.log(pcNumber);
