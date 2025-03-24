/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';
console.log(userName)


// Dichiara la funzione qui.
function greetUser(personName) {
    return `ciao ${personName}!`

}

// Invoca la funzione qui e stampa il risultato in console

greetUser(userName);
console.log(greetUser(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario
