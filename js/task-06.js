const textInput = document.querySelector(`#validation-input`);
console.log(textInput);
const lengthWorld = Number(textInput.getAttribute("data-length"));

textInput.addEventListener("blur", onInput);

function onInput(event) {
  console.log(event);
  console.log(textInput.value.length);
  console.log(lengthWorld);

  if (textInput.value.length === lengthWorld) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}
