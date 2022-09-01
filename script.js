function generateColor() {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  let color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

function trocaColor() {
  let bccolor = 0;
  for (let index = 1; index < 4; index += 1) {
    document.getElementById(`color-${index + 1}`).style.backgroundColor = generateColor();
  }
  console.log(bccolor);
  return bccolor;
}

const colorRed = document.getElementById('color-2');
const colorBlue = document.getElementById('color-3');
const colorGreen = document.getElementById('color-4');
const containerButton = document.getElementById('button-random-color');
//console.log (containerButton)

containerButton.addEventListener('click', trocaColor);
