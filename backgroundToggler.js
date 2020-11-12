const colors = ["antiquewhite", "tan", "tomato", "gold", "pink"];

function getRandomColor() {
  const randomIndex = Math.round(Math.random() * (colors.length - 1));
  return colors[randomIndex];
}

function toggleBgColor() {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
}

export { toggleBgColor };
