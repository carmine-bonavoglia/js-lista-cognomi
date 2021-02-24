/* Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi (ve li passo, son buono ;)): ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */

var arrayCognomi = ['Bianchi', 'Rossi', 'Verdi', 'Gallo', 'Pierro'];

//Stampiamo l'array contenente i cognomi
for(var i = 0; i < arrayCognomi.length; i++){
    document.getElementById('lista-cognomi').innerHTML += '<p>' + arrayCognomi[i] + '</p>';
}

//Chiediamo all'utente di inserire un cognome
var cognomeInput = prompt('Inserisci un cognome');

cognomeInput = cognomeInput.charAt(0).toUpperCase() + cognomeInput.substr(1).toLowerCase();

document.getElementById('cognome-utente').innerHTML += cognomeInput;

//Aggiungiamo il cognome dell'utente al nostro array e lo ordiniamo in ordine alfabetico
arrayCognomi.push(cognomeInput);

arrayCognomi.sort();

//Stampiamo il nuovo array ordinato alfabeticamente e la posizione del cognome inserito dall'utente all'interno dell'array ordinato
for(var i = 0; i < arrayCognomi.length; i++){
    document.getElementById('lista-aggiornata').innerHTML += '<p>' + arrayCognomi[i] + '</p>';
}
var posizione = arrayCognomi.indexOf(cognomeInput) + 1;

document.getElementById('posizione-utente').innerHTML += posizione;


//Creiamo un pulsante che aggiorni la pagina
var pulsante = document.getElementById("aggiorna");

pulsante.addEventListener('click',
    function(){

        document.location.reload()

    }
);