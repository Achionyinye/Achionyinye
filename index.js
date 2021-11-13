const form = document.getElementById("miniContainer2");
const fname = document.getElementById("fname");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //validate firstname
  const validateFirstName = validation.validateFirstName(fname.value);
  if (validateFirstName.status === false) {
    fname.style.border = "1px solid red";
    document.getElementById("fnameError").innerHTML = validateFirstName.text;
  }
});
