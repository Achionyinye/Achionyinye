const form = document.getElementById("miniContainer2");
const fname = document.getElementById("fname");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //validate fields
  const validateFirstName = validation.validateFirstName(fname.value);
  const validateLastName = validation.validateLastName(lastName.value);
  const validatePassword = validation.validatePassword(password.value);
  const validateEmail = validation.validateEmail(email.value);

  if (validateFirstName.status === false) {
    fname.style.border = "1px solid red";
    document.getElementById("fnameError").innerHTML = validateFirstName.text;
  }

  if (validateLastName.status === false) {
    lastName.style.border = "1px solid red";
    document.getElementById("lastNameError").innerHTML = validateLastName.text;
  }

  if (validatePassword.status === false) {
    password.style.border = "1px solid red";
    document.getElementById("passwordError").innerHTML = validatePassword.text;
  }
  if (validateEmail.status === false) {
    email.style.border = "1px solid red";
    document.getElementById("emailError").innerHTML = validateEmail.text;
  }
  if (
    validateFirstName.status &&
    validateLastName.status &&
    validatePassword.status &&
    validateEmail.status
  ) {
    form.submit();
  }
});
