// -Il programma dovrà mostare un form da compilare con cui chiedere all'utente:
//  Nome e Cognome,età,km;
// -In base a queste informazioni dovrà calcolare il prezzo totale del viaggio
// secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// -va applicato uno sconto del 20% per i minorenni
// -va applicato uno sconto del 40% per gli over 65.
const buttonGenera = document.getElementById("btnGenera");
const buttonAnnulla = document.getElementById("btnAnnulla");
let ciccio = document.getElementById("ticket").style.display = "none";


buttonGenera.addEventListener("click", function() {

    let nomeCognome = document.getElementById("nome-cognome").value;

    let km = parseInt(document.getElementById("km").value);

    let eta = parseInt(document.getElementById("eta").value);


    if( km != '' && isNaN(km)) {

        alert("Devi inserire un numero! Il campo non può essere vuoto!!");

    }else if( km <= 10 || km > 3000) {

        alert("Minimo Kilometri inseribili 11 e massimo 3000!!");

    }else if( nomeCognome == '' || !isNaN(nomeCognome)) {

        alert("Devi inserire un numero! Il campo non può essere vuoto!!");
    }


    let prezzo = km * 0.21;

    let tipoOfferta = "Biglietto standard"; 

    if( eta === "minorenne") {
        
        prezzo -= prezzo * (20 / 100);
        tipoOfferta = "Sconto Minorenni";

    } else if( eta === "over") {

        prezzo -= prezzo * (40 / 100);
        tipoOfferta = "Sconto Over";

    }

    prezzo = prezzo.toFixed(2);

    document.getElementById("nome-passeggero").innerHTML = nomeCognome;
    document.getElementById("offerta-biglietto").innerHTML = tipoOfferta;
    document.getElementById("numero-carrozza").innerHTML = Math.floor(Math.random() * 10) +1;
    document.getElementById("numero-cp").innerHTML = Math.floor(Math.random() * 90000) +1;
    document.getElementById("prezzo-biglietto").innerHTML = `${prezzo} €`;
    document.getElementById("ticket").style.display = "block";
    
});


buttonAnnulla.addEventListener("click", function() {

    document.getElementById("ticket").style.display = "none";
    document.getElementById("nome-cognome").value = "";
    document.getElementById("km").value = "";
    document.getElementById("eta").value = "Seleziona";

});