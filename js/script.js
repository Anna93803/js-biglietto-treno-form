// -Il programma dovrà mostare un form da compilare con cui chiedere all'utente:
//  Nome e Cognome,età,km;
// -In base a queste informazioni dovrà calcolare il prezzo totale del viaggio
// secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// -va applicato uno sconto del 20% per i minorenni
// -va applicato uno sconto del 40% per gli over 65.

// const inputNomeCognome = document.querySelector("#nome-cognome").value;

// const inputKm = document.querySelector("#km").value;

// const inputEta = document.querySelector("#eta").value;

const buttonGenera = document.getElementById("btnGenera");

const buttonAnnulla = document.querySelector("#btnAnnulla");


buttonGenera.addEventListener("click", function() {
    
    const inputNomeCognome = document.querySelector("#nome-cognome").value;

    const inputKm = parseInt(document.querySelector("#km").value);

    const inputEta = parseInt(document.querySelector("#eta").value);

    if(inputNomeCognome != '' && !isNaN(inputKm) && inputEta != '' && !isNaN(inputEta) ) {

        alert("Devi inserire un numero! Il campo non può essere vuoto o contenere caratteri!!");
        // km = parseInt(prompt("Quanti Kilometri vuoi percorrere?"));
        if (inputKm <= 10) { 

            alert("Minimo Kilometri inseribili 11");
            // km = parseInt(prompt("Quanti Kilometri vuoi percorrere?"));
        }else if (inputKm > 3000) {

            alert("Massimo Kilometri inseribili è 3000");
            // km = parseInt(prompt("Quanti Kilometri vuoi percorrere?"));
        }else if (inputEta < 18) {

            prezzo -= prezzo * (20 / 100);

        }else if ( inputEta >= 65) {

            prezzo -= prezzo * (40 / 100);

        }
    }

    let prezzo = inputKm * 0.21;
    
    prezzo = prezzo.toFixed(2);

    document.getElementById("nome-passegero").innerHTML = inputNomeCognome;
    document.getElementById("offerta").innerHTML = tipoOfferta;
    document.getElementById("numero-carrozza").innerHTML = Math.floor(Math.random() *5) +1;
    document.getElementById("numero-cp").innerHTML = Math.floor(Math.random() * 99000) +1;
    document.getElementById("prezzo-biglietto").innerHTML = `${prezzo} €`;
    
});