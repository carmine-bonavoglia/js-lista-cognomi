/* Lista Cognomi
Chiedere all’utente il cognome
inserirlo in un array con altri cognomi (ve li passo, son buono ;)): ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
stampa la lista ordinata alfabeticamente
scrivi anche la posizione "umana" della lista in cui il nuovo utente si trova */

var arrayCognomi = ['Bianchi', 'Rossi', 'Verdi', 'Gallo', 'Pierro', 'Scognamiglio'];

//Stampiamo l'array contenente i cognomi
console.log(arrayCognomi);

//Chiediamo all'utente di inserire un nuovo cognome e lo trasformiamo in modo da avere la prima lettera in Maiuscolo e le altre in Minuscolo
var cognomeInput = prompt('Inserisci un nuovo cognome');

cognomeInput = cognomeInput.charAt(0).toUpperCase() + cognomeInput.substr(1).toLowerCase();

//Aggiungiamo il cognome dell'utente al nostro array e lo ordiniamo in ordine alfabetico
arrayCognomi.push(cognomeInput);

arrayCognomi.sort();

//Stampiamo il nuovo array ordinato alfabeticamente e la posizione del cognome inserito dall'utente all'interno dell'array ordinato
console.log(arrayCognomi);

var posizione = arrayCognomi.indexOf(cognomeInput) + 1;

console.log('La posizione del nostro cognome è: ' + posizione);

