function formCheck() {
  const usernameField = document.querySelector("#username");
  const passwordField = document.querySelector("#pwd");
  if (usernameField.value === "") {
    showError("Please enter your username");
    usernameField.focus();
    return false;
  } else if (passwordField.value === "") {
    showError("Please enter your password");
    passwordField.focus();
    return false;
  } else if (passwordField.value.length < 6) {
    showError("Password must have at least 6 characters");
    passwordField.focus();
    return false;
  }
  return true;
}

function showError(msg) {
  let errorMessage = document.querySelector(".error-message");
  errorMessage.innerHTML = msg;
}
