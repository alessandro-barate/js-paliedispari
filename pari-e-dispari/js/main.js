"use strict";

const userEvenOdd = prompt("Scegli pari o dispari").toLowerCase();
let userNumber = Number(prompt("Scegli un numero da 1 a 5"));
const pcNumber = randomNumber();

while (userNumber > 5) {
  alert("Non hai inserito un numero corretto");
  userNumber = Number(prompt("Scegli un numero da 1 a 5"));
}

function randomNumber() {
  let random = Math.floor(Math.random() * 5 + 1);
  return random;
}

console.log(userEvenOdd);
console.log(userNumber);
console.log(pcNumber);

const numbersSum = userNumber + pcNumber;
console.log(numbersSum);

const result = evenOdd(numbersSum);

function evenOdd() {
  if (numbersSum % 2 === 0) {
    console.log("Pari! Hai vinto");
    //return true;
  } else {
    console.log("Dispari! Hai perso");
    //return false;
  }
}
