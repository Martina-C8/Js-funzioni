//1- crea una funzione che controlli due numeri interi. 
//Ritorna true se uno dei sue è 50 o se la somma dei due è 50

function controllaNumeri(num1, num2) {
    if (num1 == 50 || num2 == 50 || num1 + num2 == 50) {
        return true;
    } else {
        return false;
    }
}
//console.log(controllaNumeri(50, 69))

//2- Crea una funzione che rimuova il carattere ad una specifica posizione 
//da una stringa. Passa la stringa e la posizione come parametri 
//e ritorna la stringa modificata 

function rimuoviCarattere() {
    var stringa = prompt("Inserisci una stringa");
    var posizione = parseInt(prompt("Inserisci la posizione del carattere da rimuovere"));
    stringa = stringa.slice(0, posizione) + stringa.slice(posizione + 1, stringa.length);
    return stringa;
}

/*3- Crea una funzione che controlli se due numeri siano compresi tra 40 
e 60 o tra 70 e 100. 
Ritorna true se rispecchaino queste condizioni, altrimenti false  */

function controlloNumeri(num1, num2) {
    if ((num1 >= 40 && num1 <= 60) || (num2 >= 40 && num2 <= 60) || (num1 + num2 >= 40 && num1 + num2 <= 60)) {
        return true;
    } else {
        return false;
    }
}
//console.log(controllaNumeri(78,89))

/*4- Crea una funzione che accetti un nome di città come parametro e ritorni
il nome stesso se inizia con "los" o "new", altrimenti ritorna false */
function controlloCitta() {
    var citta = prompt("Inserisci una città");
    if (citta.startsWith("los") || citta.startsWith("new")) {
        return citta;
    } else {
        return false;
    }
}

/*5- Crea una funzione che calcoli e ritorni la somma di tutti gli elementi da un array. 
L'array deve essere passato come parametro */
function sommaArray() {
    var array = [1, 2, 3, 4, 5];
    var somma = 0;
    for (var i = 0; i < array.length; i++) {
        somma += array[i];
    }
    return somma;
}

/*6- Crea una funzione che controlli che un array NON contenga i numeri 1 o 3.
Se non li contiene, ritorna true, sennò false*/

function nonContiene() {
    var array = [1, 2, 3, 4, 5];
    for (var i = 0; i < array.length; i++) {
        if (array[i] == 1 || array[i] == 3) {
            return false;
        } else {
            return true;
        }
    }
}

/*7- Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come 
parametro. 
- angolo acuto: meno di 90 gradi --> ritorna "acuto"
- Angolo ottuso: tra i 90 e i 180 gradi --> ritorna "ottuso"
- Angolo retto: 90 gradi --> ritorna "retto"
- angolo piatto: 180 gradi --> ritorna "piatto"
 */
function tipoAngolo() {
    var angolo = parseInt(prompt("Inserisci un angolo"));
    if (angolo < 90) {
        return "acuto";
    } else if (angolo > 90 && angolo < 180) {
        return "ottuso";
    } else if (angolo == 90) {
        return "retto";
    } else if (angolo == 180) {
        return "piatto";
    }
}

/*8- Crea una funzione che crei un acronimo a partire da una frase.
Es. "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT"
*/
// function acronimo() {
//     var frase = prompt("Inserisci una frase");
//     frase = frase.split(" ");
//     var acronimo = "";
//     for (var i = 0; i < frase.length; i++) {
//         acronimo += frase[i][0];
//     }
//     return acronimo;
// }


/*NOTA: tutti gli esercizi devono essere svolti usando le funzioni
1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa. */

function extra1(string) {
    let letteraPiuUsata  = ""
    let count = 0 //variabile che serve per contare quante volte viene ripetuta una lettera
    let arrayLettere = string.split("") //creo array dalla stringa con lo come parametro dello split il divisore
    for(let i = 0; i < arrayLettere.length; i++ ) {
        let calcoloSingolaLettera = string.split(string.charAt(i)).length-1 //splitto la stringa per il carattere che sto ciclando, tolgo 1
        if (calcoloSingolaLettera > count) {
            count = calcoloSingolaLettera
            letteraPiuUsata = string.charAt(i)
        } 

    } return letteraPiuUsata
    
}



/*NOTA: tutti gli esercizi devono essere svolti usando le funzioni
2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra. 
Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo. Se le due parole sono anagrammi, ritorna `true`, altrimenti ritorna `false`.*/ 

// function anagrammi (a, b) {
//     let array1 = a.split(""); 
//     let array2 = b.split(""); 
//     let ordine1 = array1.sort()
//     let ordine2 = array2.sort()
//     let stringaDaArray = ordine1.join()
//     let stringaDaArray1 = ordine2.join()
//     if (stringaDaArray === stringaDaArray1) {
//         return true
//     } else {
//         return false
//     }

// }

function anagrammi1 (a, b){
    let var1 = a.split("").sort().join().toLowerCase()
    let var2 = b.split("").sort().join().toLowerCase()
    if (var1===var2) {
        return true
}   else {
    return false
}
}

console.log(anagrammi1("Ciao", "Cristina"))






/*3. crea una funzione che Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri), 
ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.
Per esempio, partendo da “cartine” e [”carenti”, “incerta”, “espatrio”], il valore ritornato deve essere [”carenti”, “incerta”]. */


/*4. crea una funzione che Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è. */



/*5. crea una funzione che, Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario. Es. 189 ⇒ 981 */


/*6. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini. */



/*7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario. Es. “Ciao” ****⇒ “oaiC” */


/*8. Crea una funzione che accetti un array e un numero Y come parametro. Dividi l’array in sotto-array aventi lunghezza Y. */


/*9. Scrivi una funzione che accetti un numero positivo X come parametro. La funzione dovrebbe stampare a console una “piramide” create con il carattere “#” e avente X strati.
 */

/*10. Scrivi una funzione che accetti un intero N e ritorni una matrice a spirale NxN: */




