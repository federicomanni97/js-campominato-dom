/*al click sul quadratino lo sfondo del quadratino stesso deve diventare verde
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Bonus
Solo se l'esercizio base funziona perfettamente: create una nuova cartella chiamata bonus e copiateci dentro tutti i files e cartelle dell'esercizio base tranne la cartella .git.
Poi procedete ad implementare il bonus come segue.
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/ 
const easyButton = document.getElementById('easy');
const mediumButton = document.getElementById('medium');
const hardButton = document.getElementById('hard');
const btn = document.getElementById('start');
let score = 0;
let bombsToGenerate = 16;
let bombs = [];
for (let index = 0; index < bombsToGenerate; index++) {
    let randomNumber = getRndInteger(1, 49)
    
    bombs.push(randomNumber);


}
console.log(bombs);

btn.addEventListener('click', function(){
    //num di quadratini da generare
    //mi prendo la griglia di gioco
    const playground = document.getElementById('playground');
    playground.innerHTML = '';
    const numSquare = document.getElementById('difficultMode').value;
    //ciclo per stampare i quadratini
    for(let i = 0; i < numSquare; i++){
        //genero quadratino
        let square = drawSquare(i, numSquare);
        //appendo il quadratino alla griglia
        playground.append(square);
    }

});

function drawSquare(squareIndex, numSquare){
    let squareWidth = Math.sqrt(numSquare);
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `calc(100% / ${squareWidth})`;
    square.style.height = square.style.width;
    square.innerHTML = squareIndex + 1;
    square.addEventListener('click', function(){
        square.classList.add('active');
        console.log(squareIndex + 1);
        for (let i = 0; i < bombs.length; i++) {
            if (bombs[i] == squareIndex + 1) {
                console.log('esploso');
                
            }
            else {
                score += 1;
                console.log(score);
                return score;
            }
        }
    });
    return square;
    
}



//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.


//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

 
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo //// possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).

















//UTILITY
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
