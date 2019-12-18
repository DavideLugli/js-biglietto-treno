// chiedere all’utente i km che vuole percorrere
var lunghezzaViaggio = parseInt(prompt('Quanti km devi percorrere?'));
console.log(lunghezzaViaggio);
// chiedere all’utente l’età
var etaPasseggero = parseInt(prompt('Quanti anni hai?'));
console.log(etaPasseggero);
// prezzo biglietto (0.21euro/km)
var prezzoBiglietto = 0.21 * lunghezzaViaggio;

// sconto del 20% se minorenne
if (etaPasseggero < 18) {
  prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto / 100) * 20);
  console.log(prezzoBiglietto);
}
// sconto 40% se over 65
else if (etaPasseggero >= 65) {
  prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto / 100) * 40);
  console.log(prezzoBiglietto);
} else {
  var prezzoBiglietto = 0.21 * lunghezzaViaggio;
  console.log(prezzoBiglietto);
}
