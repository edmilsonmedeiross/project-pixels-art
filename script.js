function generateColor () {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  let color = '(' + r + ', ' + g + ', ' + b + ')'
  return color;
}

function generateColor1 () {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  let color = '(' + r + ', ' + g + ', ' + b + ')'
  return color;
}

function generateColor2 () {
  let r = parseInt(Math.random() * 255);
  let g = parseInt(Math.random() * 255);
  let b = parseInt(Math.random() * 255);
  let color = '(' + r + ', ' + g + ', ' + b + ')'
  return color;
}

const colorRed = document.getElementById('red');
const colorBlue = document.getElementById('blue');
const colorGreen = document.getElementById('green');
const containerButton = document.getElementById('button-random-color');
//console.log (containerButton)

containerButton.addEventListener('click', generateColor, generateColor1, generateColor2);
