const validation = {
  // Validate email
  validateEmail: function (email) {
    if (isEmpty(email)) {
      return { text: "Email is required", status: false };
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      return { text: "Invalid email address", status: false };
    } else {
      return { text: email, status: true };
    }
  },
  // Validate firstName
  validateFirstName: function (firstName) {
    if (isEmpty(firstName)) {
      return { text: "First name is required", status: false };
    } else if (firstName.length < 3) {
      return {
        text: "Invalid first name (must be greater than length of 3)",
        status: false,
      };
    } else {
      return { text: firstName, status: true };
    }
  },
  // Validate lastName
  validateLastName: function (lastName) {
    if (isEmpty(lastName)) {
      return { text: "First name is required", status: false };
    } else if (lastName.length < 3) {
      return {
        text: "Invalid first name (must be greater than length of 3)",
        status: false,
      };
    } else {
      return { text: lastName, status: true };
    }
  },

  validatePassword: function (password) {
    if (isEmpty(password)) {
      return { text: "Password is required", status: false };
    } else if (password.length < 6) {
      return {
        text: "Password must be greater than length of 6",
        status: false,
      };
    } else if (password.length > 30) {
      return { text: "Password must be less than length of 30", status: false };
    } else {
      return { text: password, status: true };
    }
  },
};
