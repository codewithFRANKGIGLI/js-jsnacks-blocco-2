// Chiedi un numero di 4 cifre all’utente 
// e calcola la somma di tutte le cifre che compongono il numero.

// non ho capito se deve inserire le cifre una alla volta

// chiedo un numero di 4 cifre
let number = prompt("Inserisci un numero di 4 cifre: ");

if (number.length === 4) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
    }
    alert("La somma delle cifre del numero è: " + sum);
} else {
    alert("Non hai inserito un numero a 4 cifre.");
}