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

// creo i div e li appendo al body
const evenNumbers = document.createElement('div');
evenNumbers.id = 'divEven';
evenNumbers.style.color = 'red';
document.body.append(evenNumbers);

const oddNumbers = document.createElement('div');
oddNumbers.id = 'divOdd';
oddNumbers.style.color = 'green';
document.body.append(oddNumbers);

// creo il ciclo che assegnerà i numeri ai rispettivi div
for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] % 2 === 0) {
        evenNumbers.innerHTML += `${randomNumbers[i]} `;
    } else {
        oddNumbers.innerHTML += `${randomNumbers[i]} `;
    }
}