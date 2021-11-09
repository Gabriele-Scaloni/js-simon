/* Descrizione:
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*ricordatevi come detto che è facile che i tempi della cancellazione degli elementi in pagina, usando i prompt si sfasino ed è facile che lo vediate funzionare in modo corretto solo su Firefox. Questo è legato al funzionamento del browser e del prompt relativo.

 */



//creo  5 numeri casuali da 1 a 100

/* altro modo per stampare 5 numeri casuali 
var randomArr = Array.apply(null, Array(5)).map(function(item, index){
    return Math.floor(Math.random() * 100)
}); */

var randomArr = [];
while(randomArr.length < 5){
    var r = Math.floor(Math.random() * 100) + 1;
    if(randomArr.indexOf(r) === -1) randomArr.push(r);
}

console.log(randomArr);
//stampo i numeri nell'html
document.getElementById('result').innerHTML = (randomArr);

var numero;

//creo un ciclo for per stampare i 5 prompt
setTimeout(function () {
    for(let i = 0; i < 5; i++) {
        numero = parseInt(prompt("inserisci un numero"));

        //confronto i prompt con i numeri stampati
        if (randomArr.includes(numero)) {

            console.log("bravo hai indovinato");

        } else {

            console.log("mi dispiace, ritenta");
        }
    }    
}, 3000);



