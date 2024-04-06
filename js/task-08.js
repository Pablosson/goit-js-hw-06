const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Wszystkie pola muszą być uzupełnione!");
  }
  const userDetails = { email: email.value, Password: password.value };

  event.currentTarget.reset();
}
