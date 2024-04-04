function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector(`body`);
console.dir(body);
const textColor = document.querySelector(`span`);
console.log(textColor);
const button = document.querySelector(`button`);

button.addEventListener(`click`, onClick);

function onClick() {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  textColor.textContent = color;
}
