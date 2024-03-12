// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Chiedo all'utente le 2 parole
const firstWord = prompt("Dammi una prima parola: ");
const secondWord = prompt("Dammi una seconda parola: ");

// controllo la lunghezza e la salvo in 2 variabili
let shortWord, longWord;
if (firstWord.length < secondWord.length) {
  shortWord = firstWord;
  longWord = secondWord;
} else {
  shortWord = secondWord;
  longWord = firstWord;
}

// sparo i  risultati
alert(`La parola più corta è: ${shortWord}` + `; ` + `La parola più lunga è: ${longWord}`)

console.log("La parola più corta è: " + shortWord);
console.log("La parola più lunga è: " + longWord);