"use strict";

// Chiedo all'utente di inserire una parola
const userInput = prompt("Inserisci una parola");

let userInputLowerCase = userInput.toLowerCase();

function palindrome() {
  // Divido la parola nelle sue lettere e vengono messe in un array
  const arraySplit = userInputLowerCase.split("");

  // Creo l'array della parola inserita ma con le lettere al contrario
  const arraySplitReverse = arraySplit.reverse();

  // Creo la parola con le lettere al contrario
  const reverseWord = arraySplitReverse.join("");

  // Istruzione condizionale. Se le due parole sono identiche la parola è palindroma,
  // altrimenti non lo è
  if (userInputLowerCase === reverseWord) {
    alert(`${"Ottimo!"} "${userInput}" ${"è una parola palindroma"}`);
  } else {
    alert(`${"Peccato!"} "${userInput}" ${"non è una parola palindroma"}`);
  }
}

palindrome();
