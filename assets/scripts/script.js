const INVALID_PSWD_MSG = 'Password must contain: at least 6 characters, 1 upper case character, 1 lowercase character, 1 number and must match password confirmation';
const VALID_PSWD_MSG = 'Password is correct.'
const PASSWORD_REGEX = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

let password = document.querySelector('#password');
let passwordConfirmation =  document.querySelector('#password_confirmation');
let passwords = [password, passwordConfirmation];

function checkPasswordValidity() {
  let values = passwords.map(pswd => pswd.value);
  return values[0] === values[1] && values[0] != "" && values[1] != "" && PASSWORD_REGEX.test(values[0]);
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
  passwordStatus.textContent = INVALID_PSWD_MSG;
  addInvalidStyle();

  if (checkPasswordValidity()) {
    passwordStatus.textContent = VALID_PSWD_MSG;
    addValidStyle();
  }
}

password.addEventListener('keyup', displayPasswordStatus);
passwordConfirmation.addEventListener('keyup', displayPasswordStatus);
