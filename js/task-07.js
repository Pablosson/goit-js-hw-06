const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputEl.addEventListener("input", onChangeInputFontSize);

function onChangeInputFontSize(event) {
  textEl.style.fontSize = `${inputEl.value}px`;
}
