"use strict";

let userEvenOdd = prompt("Scegli tra pari o dispari").toLowerCase();

while (userEvenOdd !== "pari" && userEvenOdd !== "dispari") {
  alert("Non hai scelto tra pari o dispari");
  userEvenOdd = prompt("Scegli tra pari o dispari").toLowerCase();
}

let userNumber = Number(prompt("Scegli un numero da 1 a 5"));

while (userNumber > 5) {
  alert("Non hai inserito un numero corretto");
  userNumber = Number(prompt("Scegli un numero da 1 a 5"));
}

const pcNumber = randomNumber(1, 5);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(userEvenOdd);
console.log(userNumber);
console.log(pcNumber);

const numbersSum = userNumber + pcNumber;
console.log(numbersSum);

const result = evenOdd(numbersSum);

function evenOdd() {
  if (numbersSum % 2 === 0 && userEvenOdd === "pari") {
    console.log("Pari! Hai vinto");
    //return true;
  } else if (numbersSum % 2 === 0 && userEvenOdd === "dispari") {
    console.log("Pari! Hai perso");
    //return false;
  } else if (numbersSum % 2 !== 0 && userEvenOdd === "dispari") {
    console.log("Dispari! Hai vinto");
  } else {
    console.log("Dispari! Hai perso");
  }
}
