/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
let vowels = ["a", "e", "i", "o", "u"];
let result = '';
let singleLetters = word.split('');
// Dichiara la funzione qui.

function findVowels(singleLetters, vowels) {
    for (let i = 0; i < singleLetters.length; i++) {
        
        for (let j = 0; j < vowels.length; j++) {
            if (singleLetters[i] === vowels[j]) {
                result+= vowels[j]
            }
            
        }
        
    }
    let vowelsNum = result.length;
    return {result, vowelsNum}
}


// Invoca la funzione qui e stampa il risultato in console
const solution = findVowels(singleLetters, vowels);
console.log(solution)


//Risultato atteso se si passa 'javascript': 3 (a, a, i)