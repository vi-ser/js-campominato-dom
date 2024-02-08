/*
Il computer deve generare 16 numeri casuali e inserirli in un array, in base al range della difficoltà prescelta (se abbiamo scelto facile l'array conterrà numeri casuali da 1 a 100, se invece abbiamo scelto difficile l'array dovrà contenerne da 1 a 49): questi rappreseranno le posizioni delle nostre bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

BONUS 1
Quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle.

BONUS 2
Quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste.
*/

const gridElement = document.querySelector("#grid");
const startButton = document.querySelector("#start");
const difficultyEl = document.querySelector("#difficulty");

const bombCells = [];
const bombNumber = 16;

// difficoltà di default su "easy"
let selectedValue = difficultyEl.value;
console.log(selectedValue);

// gestisco il cambio di livello di difficoltà
difficultyEl.addEventListener("change",
    function () {
        // leggo il valore selezionato
        selectedValue = difficultyEl.value;
        console.log("Livello di difficoltà:", selectedValue);
    }
)

startButton.addEventListener("click",
    function () {

        // rimuovo prima le classi della partita precedente (se ci sono)
        gridElement.classList.remove("medium");
        gridElement.classList.remove("hard");


        // rimuovo griglia precedente (se c'è)
        gridElement.innerHTML = "";

        // dichiaro la dimensione della griglia
        let gridSize;

        // gestisco i casi in base al livello di difficoltà
        if (selectedValue == "medium") {
            gridSize = 81;
        }

        else if (selectedValue == "hard") {
            gridSize = 49;
        }

        else {
            gridSize = 100;
        }


        // generazione griglia
        for (let i = 0; i < gridSize; i++) {

            // in caso di difficoltà "medium"
            if (selectedValue == "medium") {
                gridElement.classList.add("medium");
            }

            // in caso di difficoltà "hard"
            if (selectedValue == "hard") {
                gridElement.classList.add("hard");
            }

            // creo nuova cella
            const newCell = document.createElement("div");
            newCell.classList.add("square");

            // in caso di difficoltà "medium"
            if (selectedValue == "medium") {
                newCell.classList.add("medium");
            }

            // in caso di difficoltà "hard"
            if (selectedValue == "hard") {
                newCell.classList.add("hard");
            }


            // inserisco numero progressivo
            newCell.innerText = [i + 1];


            newCell.addEventListener("click",
                function () {

                    console.log(this);
                    // coloro la casella al click
                    newCell.classList.add("active");

                }
            )

            // aggiungo cella alla griglia
            gridElement.append(newCell);
        }

        // inserisco le celle bomba
        bombMaker(gridSize);

    }
)


// generazione array con bombe in base alla grandezza della griglia
function bombMaker(size) {

    while (bombCells.length < bombNumber) {
        const bomb = Math.floor(Math.random() * size + 1);

        // controllo che non ci siano duplicati
        if (!bombCells.includes(bomb)) {

            // inserisco la bomba nell'array
            bombCells.push(bomb);
        }
    }
    console.log("Bombe: ", bombCells);
}


