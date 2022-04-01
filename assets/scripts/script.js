let password = document.querySelector('#password');
let passwordConfirmation =  document.querySelector('#password_confirmation');
let passwords = [password, passwordConfirmation];

function checkPasswordValidity() {
  let values = passwords.map(pswd => pswd.value);
  return values[0] == values[1] && values[0] != "" && values[1] != "";
}

function addInvalidStyle() {
  passwords.forEach(pswd => pswd.classList.add('invalid'));
  passwords.forEach(pswd => pswd.classList.remove('valid'));
}

function addValidStyle() {
  passwords.forEach(pswd => pswd.classList.add('valid'));
  passwords.forEach(pswd => pswd.classList.remove('invalid'));
}

function displayPasswordStatus() {
  let passwordStatus = document.querySelector('#password-info');
  passwordStatus.textContent = "Passwords do not match.";
  addInvalidStyle();

  if (checkPasswordValidity()) {
    passwordStatus.textContent = "Passwords are valid.";
    addValidStyle();
  }
}

password.addEventListener('keyup', displayPasswordStatus);
passwordConfirmation.addEventListener('keyup', displayPasswordStatus);
