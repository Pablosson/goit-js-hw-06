function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberBoxEl = document.querySelector('input[type="number"]');
const bgCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const containerBoxesEl = document.querySelector("#boxes");
const boxEl = document.querySelector(".div-item");

let originalSize = 30;
const nullSize = 0;

bgCreateEl.addEventListener("click", createBoxes);
btnDestroyEl.addEventListener("click", destroyBoxes);

function onFindAmount() {
  let amount = numberBoxEl.value;
  return amount;
}

function createBoxes(amount) {
  if (onFindAmount() >= 1) {
    let amount = onFindAmount();

    for (let i = 1; i <= amount; i += 1) {
      const boxEl = document.createElement("div");

      boxEl.style.width = `${originalSize}px`;
      boxEl.style.height = `${originalSize}px`;
      originalSize += 10;
      const randomColor = getRandomHexColor();
      boxEl.style.backgroundColor = randomColor;
      containerBoxesEl.append(boxEl);
    }
  }
}

function destroyBoxes() {
  containerBoxesEl.innerHTML = "";
}
