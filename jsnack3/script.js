// Crea due tag div con due id diversi:
// un div avrà il testo colorato di rosso mentre l’altro di verde.
// Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari 
// e in verde i numeri pari.

// Creo l'array vuoto e il ciclo per riempirlo di numeri random
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    randomNumbers.push(randomNumber);
}
console.log(randomNumbers);


const evenNumbers = document.createElement('div');
evenNumbers.id = 'divEven';
evenNumbers.style.color = 'red';
document.body.innerHTML += ;

const oddNumbers = document.createElement('div');
oddNumbers.id = 'divOdd';
oddNumbers.style.color = 'green';
document.body.innerHTML += ;


