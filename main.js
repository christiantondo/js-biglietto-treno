console.log("JS Funzionante")

// Input:
// Recupero: numero di chilometri ed età del passeggero
const age = parseInt(prompt("Inserisci l'età del viaggiatore"));
const distance = parseInt(prompt("Inserisci la distanza da percorrere in chilometri"));

// Elaborazione:
// Calcolo tariffa di base (distanza * costo chilometrico)
// Applico eventuali sconti
// Verifico se l'utente è in una fascia d'età con scontistica
// Eventualmente applico lo sconto (cioè ricalcolo il totale)
console.log("Input age: ", age);
console.log("Input distance: ", distance);
//Output: