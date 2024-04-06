const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputControl.addEventListener("input", onInput);
textValue.style.fontSize = `${inputControl.value}px`;

function onInput(event) {
  const fontSize = `${event.currentTarget.valueAsNumber}px`;
  console.log(event.currentTarget.valueAsNumber);
  textValue.style.fontSize = fontSize;
  console.log(textValue.style.fontSize);
}
