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

  //console.log(paleta);
}

function addItem() {
  //let array = JSON.parse(localStorage.getItem('colorPalette'));

  if (localStorage.colorPalette) {
    paleta = JSON.parse(localStorage.getItem('colorPalette'));

  }

  document.getElementById('color-2').style.backgroundColor = paleta[0];
  document.getElementById('color-3').style.backgroundColor = paleta[1];
  document.getElementById('color-4').style.backgroundColor = paleta[2];

}

document.getElementById('button-random-color').addEventListener('click', trocaColor);
addItem();

//document.getElementById('button-random-color').addEventListener('click', addItem);
