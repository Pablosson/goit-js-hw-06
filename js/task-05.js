const textInput = document.querySelector(`#name-input`);
console.log(textInput);
const outPut = document.querySelector(`#name-output`);
console.log(outPut);

textInput.addEventListener("input", onInput);

function onInput(event) {
  outPut.textContent = event.currentTarget.value;

  if (!event.currentTarget.value) {
    outPut.textContent = "Anonymous";
  }
}
