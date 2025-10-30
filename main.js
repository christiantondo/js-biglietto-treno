console.log("JS Funzionante")

// Input:
// Recupero: numero di chilometri ed età del passeggero
const age = parseInt(prompt("Inserisci l'età del viaggiatore"));
const distance = parseInt(prompt("Inserisci la distanza da percorrere in chilometri"));
const costoKM = 0.21;

// Elaborazione:
// Calcolo tariffa di base (distanza * costo chilometrico)
// Applico eventuali sconti
// Verifico se l'utente è in una fascia d'età con scontistica
// Eventualmente applico lo sconto (cioè ricalcolo il totale)
console.log("Input age: ", age);
console.log("Input distance: ", distance);

const costoBiglietto = distance * costoKM;
console.log("Costo del biglietto: ", costoBiglietto);

if ( age < 18 ) {
    console.log("Applicare scontistica Junior");
} else if ( age > 65 ) {
    console.log("Applicare scontistica Senior");
} else {
    console.log("Tariffa di base");
}

//Output:
alert(`Il costo del biglietto è di ${costoBiglietto} €`);