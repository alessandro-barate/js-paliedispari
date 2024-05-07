"use strict";

// Chiedo all'utente di inserire una parola
const userInput = prompt("Inserisci una parola");

//console.log(userInput);

// Divido la parola nelle sue lettere e vengono messe in un array
const arraySplit = userInput.split("");

//console.log(arraySplit);

// Creo l'array della parola inserita ma con le lettere al contrario
const arraySplitReverse = arraySplit.reverse();

// Creo la parola con le lettere al contrario
const reverseWord = arraySplitReverse.join("");

//console.log(arraySplitReverse);

//console.log(reverseWord);

// Istruzione condizionale. Se le due parole sono identiche la parola è palindroma,
// altrimenti non lo è
if (userInput === reverseWord) {
  alert(`${"Ottimo!"} "${userInput}" ${"è una parola palindroma"}`);
} else {
  alert(`${"Peccato!"} "${userInput}" ${"non è una parola palindroma"}`);
}
