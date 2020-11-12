import colors from "./main.css";

function getRandomColor() {
  const colorsValues = Object.values(colors);
  const randomIndex = Math.round(Math.random() * (colorsValues.length - 1));
  return colorsValues[randomIndex];
}

function toggleBgColor() {
  const randomColorClass = getRandomColor();
  document.body.className = "";
  document.body.classList.add(randomColorClass);
}

export { toggleBgColor };
