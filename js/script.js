
// EXSERCISE

// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

// il prezzo del biglietto è definito in base ai km (0.21 € al km)

// va applicato uno sconto del 20% per i minorenni

// va applicato uno sconto del 40% per gli over 65.

// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 

// L'output va stampato nella pagina HTML.

// SUBCODE

// input
// chiedere il numero di km che l'utente intende fare
// chiedere l'età del passeggero

// script
// calcolare il prezzo della tratta moltiplicando il numero di km che il cliente intende fare * 0,21€ 
// se l'età dell'utente è <= di 17 anni applicare 20% di sconto sul prezzo del biglietto
// se l'età dell'utente è >= 65 anni applicare 40% di sconto sul prezzo del biglietto
// altrimenti: il prezzo rimane invariato (condizione iniziale della variabile let)
// approssimare il prezzo finale per un massimo di due cifre decimali dopo la virgola

// output
// stampare il risultato sulla pagina html

// input section
const routeDistance = parseInt(prompt("Quanti Km intendi percorrere? (digita numero)"))
console.log (routeDistance)

const userAge = parseInt(prompt("Quanti anni hai? (digita numero)"))
console.log (userAge)

// script section
// distanza moltiplicato prezzo al km
const routePrice = (routeDistance) * (0.21)
console.log(routePrice)

let discount;
if (userAge < 18) {
    discount = ((routePrice) * 20) / 100;
} else if (userAge >= 65 ) {
    discount = ((routePrice) * 40) / 100
} else {
    discount = 0;
}

// aprossimazione primi due decimali
const finalPrice = (routePrice - discount).toFixed(2);

console.log(finalPrice)

