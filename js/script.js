/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
Potete realizzare lo stile che volete, sin quando tutto è leggibile con facilità :muscolo::carnagione-2:
Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/

const gridElement = document.querySelector("#grid");
const startButton = document.querySelector("#start");
const difficultyEl = document.querySelector("#difficulty");


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
                    newCell.classList.toggle("active");

                }
            )

            // aggiungo cella alla griglia
            gridElement.append(newCell);

        }
    }
)


