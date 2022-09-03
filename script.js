function generateColor() {
  const r = parseInt(Math.random() * 255);
  const g = parseInt(Math.random() * 255);
  const b = parseInt(Math.random() * 255);
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

let paleta = [];

function trocaColor() {
  paleta = [];
  for (let index = 1; index < 4; index += 1) {
    document.getElementById(`color-${index + 1}`).style.backgroundColor = generateColor();
    paleta.push(document.getElementById(`color-${index + 1}`).style.backgroundColor);
  }

  localStorage.setItem('colorPalette', JSON.stringify(paleta));
}

function addItem() {
  if (localStorage.colorPalette) {
    paleta = JSON.parse(localStorage.getItem('colorPalette'));
  }

  document.getElementById('color-2').style.backgroundColor = paleta[0];
  document.getElementById('color-3').style.backgroundColor = paleta[1];
  document.getElementById('color-4').style.backgroundColor = paleta[2];
}

let block = document.getElementById('pixel-board');

 function createPixelBoard() {
  for (index = 0; index < 25; index += 1) {
    let newDiv = document.createElement('div');
    newDiv.className = 'pixel';
    newDiv.style.backgroundColor = 'white';
    block.append(newDiv);
  }
}

document.getElementById('button-random-color').addEventListener('click', trocaColor);
createPixelBoard();
addItem();
//window.addEventListener('load', createPixelBoard);
