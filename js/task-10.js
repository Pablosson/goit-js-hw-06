function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector(`#boxes`);
const input = document.querySelector(`input`);
const createBtn = document.querySelector(`button[data-create]`);
const destroyBtn = document.querySelector(`button[data-destroy]`);
console.log(boxes);
console.log(input);
console.log(createBtn);
console.log(destroyBtn);

createBtn.addEventListener(`click`, onClick);

function onClick() {
  console.log(input.value);
  const boxesToAdd = [];
  for (let i = 0; i < Number(input.value); i += 1) {
    console.log(`Iteration number ${i}`);
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.background = getRandomHexColor();
    boxesToAdd.push(div);
  }
  return boxes.append(...boxesToAdd);
}

destroyBtn.addEventListener(`click`, destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = ` `;
}
