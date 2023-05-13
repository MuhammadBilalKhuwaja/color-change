const colors = ["AliceBlue", "AntiqueWhite", "Aqua", "Black", "Azure", 
"Beige", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", 
"Chartreuse", "Chocolate", "CornflowerBlue", "DarkGoldenRod", "DarkGreen",
"DarkOrange", "DarkKhaki", "DarkSeaGreen", "DarkSalmon"]

function changeColor() {
  const colorBox = document.querySelector('.color-box');
  const colorName = document.querySelector('#color-name');
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  colorBox.style.backgroundColor = randomColor;
  colorName.innerText = randomColor;
}

function resetColor() {
  const colorBox = document.querySelector('.color-box');
  const colorName = document.querySelector('#color-name');
  colorBox.style.backgroundColor = '#ff0000';
  colorName.innerText = 'Red';
}
