// Utility
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// creo la griglia
function renderGrid(cellsLength) {
  const columnsLength = Math.ceil(
    Math.sqrt(cellsLength),
    Math.sqrt(cellsLength)
  );
  const rowsLength = columnsLength;

  const grid = document.getElementById("grid");

  /* necessario per ordinamento randomico 
  // genero array di numeri
  const numbers = [];
  for (let i = 0; i < cellsLength; i++) {
    numbers.push(i + 1);
  }

  // mischio i numeri ottenuti
  numbers.sort(() => 0.5 - Math.random());

  */

  const rows = [];

  // genero N row, N corrisponde a ROWS_LENGTH
  for (let rowIndex = 0; rowIndex < rowsLength; rowIndex++) {
    // creo l'elemento row
    let row = document.createElement("div");
    row.className = "row";
    const cells = renderCells(columnsLength, rowIndex); // ordinamento progressivo
    // const cells = renderCells(columnsLength, numbers); //ordinamento randomico
    row.append(...cells);
    rows.push(row);
  }

  grid.replaceChildren(...rows);
}

// creo le celle
function renderCells(columnsLength, rowIndex) {
  //ordinamento progressivo
  // function renderCells(columnsLength, numbers) { //ordinamento randomico
  const cells = [];
  for (let columnIndex = 0; columnIndex < columnsLength; columnIndex++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.innerText = rowIndex * columnsLength + columnIndex + 1; //ordinamento_progressivo
    // cell.innerText = numbers.pop() //ordinamento randomico
    cell.addEventListener("click", cellsLogic );
    cells.push(cell);
  }
  return cells;

}

function cellsLogic() {/* if(){
  this.style.backgroundColor = "red";
 
} else { */ this.style.backgroundColor = "#6495ed"; //}
}

document.getElementById("generate").addEventListener("click", function () {
  const cellsLength = Number(document.getElementById("levels").value);
  renderGrid(cellsLength);
});

renderGrid(100);













// WORK IN PROGRES //


// creo array vuoto bombs e imposto il numero massimo di bombe con costante BOMBS_NUM

const bombs= [];
const BOMBS_NUM = 16;

//funzione che crea le bombe
function renderBombs (cellsLength) {
  // creo variabile tentativi massimi con valore di cellsLength - 16 (numero di bombe)
  maxAttempt = cellsLength - BOMBS_NUM;
  //assegno un numero casuale tra 1 e cellsLength fintanto che bombs.lenght non è minore a BOMBS_NUM
  while (bombs.lenght < BOMBS_NUM) {
    let bombsNum = getRandomInt(1, cellsLength);
    // se il numero ottenuto non è già contenuto in bombs[], allora lo pusho
    if (!bombs.includes(bombsNum)) {
      bombs.push(bombsNum);
    }
  }
  return bombs;
}

// stampo le celle. se il numero stampato è contenuto in bombs[], piazzo una bomba nella cella

//al click, se la casella contiene una bomba, mostro la bomba e cambio sfondo. fine gioco, sconfitta.

//creo contatore tentativi: per ogni cella cliccata che non contiene una bomba, incremento di +1

// creo variabile tentativi massimi con valore di cellsLength - 16 (numero di bombe)

// se contatore tentativi == tentativi massimi, fine gioco, vittoria.

//fine gioco: mostro il punteggio totalizzato (contatore tentativi)