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

// recupera as 4 divs da paleta.
const fourDivs = document.getElementsByClassName('color');
// fourDivs[0].className = 'color selected';
// console.log(fourDivs);

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
    // console.log(divPalette);
  }
  // define a classe da primeira div como color selected
  document.getElementById('color-1').className = 'color selected';
} createPalette();

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
} addItem();
// recupera a div container onde estará os pixels a serem pintados
const block = document.getElementById('pixel-board');

function paint(event) {
  let divEvent = event.target;
  //let changeClass = document.getElementsByClassName('color');
  //changeClass.className = 'color selected';
  //let colorDrive = document.getElementsByClassName('selected').style.backgroundColor;
  //divEvent.style.backgroundColor = colorDrive;
  console.log(divEvent);
}

// cria 25 divs que serao os pixels a serem pintados
function createPixelBoard() {
  for (let index = 0; index < 25; index += 1) {
    const newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    newDiv.style.backgroundColor = 'white';
    newDiv.addEventListener('click', paint);
    block.append(newDiv);
  }
} createPixelBoard();

document.getElementById('button-random-color').addEventListener('click', trocaColor);
