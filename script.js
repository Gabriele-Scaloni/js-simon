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
Prompt non lo userete poi lavorando effettivamente. (o perlomeno ce lo auguriamo :sorriso_con_goccia_sudore:)
 */



//creo  5 numeri casuali da 1 a 100
var randomArr = Array.apply(null, Array(5)).map(function(item, index){
    return Math.floor(Math.random() * 100)
});

//stampo i numeri nell'html
document.getElementById('result').innerHTML = (randomArr);
console.log(randomArr);

//creo un ciclo for per stampare i 5 prompt
for(let i = 0; i < 5; i++) {
  setTimeout(function () {

    let quest = parseInt(prompt("inserisci un numero"));
  }, 3000);

}
//confronto i prompt con i numeri stampati
