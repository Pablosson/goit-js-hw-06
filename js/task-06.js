const textInput = document.querySelector(`#validation-input`);
const lengthWorld = Number(textInput.getAttribute("data-length"));
textInput.addEventListener("blur", onInput);

function onInput(event) {
  console.log(event);

  if (textInput.value.length === lengthWorld) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
}
