/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
let userInitials = []

// Dichiara la funzione qui.
function capitalizeFisrsLetter() {
    for (let i = 0; i < names.length; i++) {
        let singleNames = names[i].split()
        for (let j = 0; j < singleNames.length; j++) {
            let initials = singleNames[j].charAt(0)
            userInitials.push(initials)
            
        }
    }
    return userInitials
}


// Invoca la funzione qui e stampa il risultato in console

 const result = capitalizeFisrsLetter(names, userInitials);
 console.log(result)
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]