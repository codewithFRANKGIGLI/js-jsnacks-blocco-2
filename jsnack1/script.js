// - L'utente inserisce un numero nel prompt, se è pari stampa il numero,
    // se è dispari stampa il numero successivo

let num = prompt("Dimmi un numero: ");
if (num % 2 === 0) {
    console.log(num);
} else {
    console.log(Number(num) + 1);
}