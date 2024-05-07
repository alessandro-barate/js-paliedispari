"use strict";

// Chiedo all'utente di inserire una parola
const userInput = prompt("Inserisci una parola");

// Controllo per trasformare l'input in lower case
let userInputLowerCase = userInput.toLowerCase();

// Dichiaro la parola al contrario richiamando la funzione
const reverseWord = palindrome(userInput);

// Istruzione condizionale. Se le due parole sono identiche la parola è palindroma,
// altrimenti non lo è
if (userInputLowerCase === reverseWord) {
  alert(`${"Ottimo!"} "${userInput}" ${"è una parola palindroma"}`);
} else {
  alert(`${"Peccato!"} "${userInput}" ${"non è una parola palindroma"}`);
}

// Funzione
function palindrome(userInput) {
  // Divido la parola nelle sue lettere e vengono messe in un array
  const arraySplit = userInputLowerCase.split("");

  // Creo l'array della parola inserita ma con le lettere al contrario
  const arraySplitReverse = arraySplit.reverse();

  // Creo la stringa con le lettere al contrario
  const strReverse = arraySplitReverse.join("");

  return strReverse;
}
