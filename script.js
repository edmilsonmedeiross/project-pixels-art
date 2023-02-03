// gera cor aleatória;

function generateColor() {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

// recupera minha div container para paletta;
const listaPalet = document.getElementById('color-palette');

// funçao para selecionar a div da paleta e mudar a classe.
function divSelect(eventP) {
  const classeSelected = document.querySelector('.selected');
  const blockGuard = eventP.target;
  if (classeSelected) {
    classeSelected.classList.remove('selected');
  }

  blockGuard.classList.add('selected');
}

// cria uma paletta de divs com 4 divs
function createPalette() {
  for (let index = 1; index <= 4; index += 1) {
    const divPalette = document.createElement('div');
    divPalette.className = 'color';
    divPalette.id = `color-${index}`;
    divPalette.addEventListener('click', divSelect);
    listaPalet.append(divPalette);
  }

  // define a classe da primeira div como color selected.
  document.getElementById('color-1').className = 'color selected';

  // atribui a cor black para a primeira div da paleta e das demais dinamicamente.
  document.getElementById('color-1').style.backgroundColor = 'black';
  document.getElementById('color-2').style.backgroundColor = 'red';
  document.getElementById('color-3').style.backgroundColor = 'blue';
  document.getElementById('color-4').style.backgroundColor = 'green';
}

createPalette();

let paleta = []; // array global para armazenar as cores geradas;

// Aqui atribui as cores do array nas divs da paletta;
function trocaColor() {
  paleta = []; // faz zerar o array para receber novas cores

  for (let index = 1; index < 4; index += 1) {
    document.getElementById(`color-${index + 1}`).style.backgroundColor = generateColor();
    paleta.push(document.getElementById(`color-${index + 1}`).style.backgroundColor);
  }

  // insere as cores que vem do array limpo no storage.
  localStorage.setItem('colorPalette', JSON.stringify(paleta));
}

// recupera as cores do storage.
function addItem() {
  if (localStorage.colorPalette) {
    paleta = JSON.parse(localStorage.getItem('colorPalette'));
  }

  // atribui as cores do storage nas divs respectivas
  document.getElementById('color-2').style.backgroundColor = paleta[0];
  document.getElementById('color-3').style.backgroundColor = paleta[1];
  document.getElementById('color-4').style.backgroundColor = paleta[2];
}

addItem();

// recupera a div container onde estará os pixels a serem pintados
const block = document.getElementById('pixel-board');

// pinta as divs pixel
function paint(event) {
  const divEvent = event.target;
  divEvent.style.backgroundColor = document.querySelector('.selected').style.backgroundColor;
  saveArt();
}

// cria 25 divs que serao os pixels a serem pintados
function createPixelBoard(param) {
  for (let index = 0; index < param; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    newDiv.style.backgroundColor = 'white';
    newDiv.addEventListener('click', paint);
    block.append(newDiv);
  }
  /* block.style.gridTemplateColumns = `repeat(${param}, 1fr)`;
  block.style.gridTemplateRows = `repeat(${param}, 1fr)`; */
}

// adicionando evento no botao randon color
document.getElementById('button-random-color').addEventListener('click', trocaColor);

// recuperando botao clear do document
const containerButton = document.getElementById('clear-board');

// funçao para limpar o pixel-board
function clear() {
  const matrix = document.querySelectorAll('.pixel');
  for (let index = 0; index < matrix.length; index += 1) {
    matrix[index].style.backgroundColor = 'white';
  }
}

// adicionando evento no botao clear.
containerButton.addEventListener('click', clear);

// array para armazenar as cores pintadas.
let pixArt = [];

// função para salvar o desenho no storage.
function saveArt() {
  const matrixX = document.querySelectorAll('.pixel');

  let pixArt = [];

  for (let index = 0; index < matrixX.length; index += 1) {
    if (matrixX[index].style.backgroundColor !== null) {
      pixArt.push(matrixX[index].style.backgroundColor);
    }
  }
  localStorage.setItem('pixelBoard', JSON.stringify(pixArt));
}

// função para carregar o desenho salvo e aplicar no board.
function loadArt() {
  const matrixX = document.querySelectorAll('.pixel');
  if (localStorage.pixelBoard) {
    pixArt = JSON.parse(localStorage.getItem('pixelBoard'));

    for (let index = 0; index < matrixX.length; index += 1) {
      matrixX[index].style.backgroundColor = pixArt[index];
    }
  }
}

function generateNewBoard() {
  let btnInput = document.getElementById('board-size').value;

  if (btnInput <= 0) {
    return window.alert('Board inválido!');
  } if (btnInput === '') {
    return window.alert('Board inválido!');
  }
  eraseData();

  btnInput = checkBoard(btnInput);

  block.style.gridTemplateColumns = `repeat(${btnInput}, 1fr)`;
  block.style.gridTemplateRows = `repeat(${btnInput}, 1fr)`;

  createPixelBoard(btnInput ** 2);
  localStorage.setItem('boardSize', JSON.stringify(btnInput));
}

function eraseData() {
  const matrixX = document.getElementById('pixel-board');

  while (matrixX.firstElementChild) { // apaga o board antes de criar um novo.
    matrixX.lastElementChild.remove();
  }
}

function checkBoard(input) {
  if (input < 5) {
    input = 5;
  } if (input > 50) {
    input = 50;
  }
  return input;
}

function loadBoard() {
  const btnInput = JSON.parse(localStorage.getItem('boardSize'));
  if (localStorage.boardSize) {
    createPixelBoard(btnInput ** 2);
    loadArt();
  } else {
    createPixelBoard(25);
    loadArt();
  }

  block.style.gridTemplateColumns = `repeat(${btnInput}, 1fr)`;
  block.style.gridTemplateRows = `repeat(${btnInput}, 1fr)`;
}
window.onload = loadBoard;

const buttonVqv = document.getElementById('generate-board');
buttonVqv.addEventListener('click', generateNewBoard);
