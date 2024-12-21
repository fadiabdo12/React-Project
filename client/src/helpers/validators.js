export function validateUsername(username) {
  if (username.length < 2) {
    return "Incorrect length - must be at least 2";
  }

  if (username.match(/[0-9]/)) {
    return "Username must not contain digits";
  }
}

export function validatePassword(password) {
  if (password.length < 3 || password.length > 8) {
    return "Password must be at least 3 and no more than 8 characters";
  }

  if (!(password.match(/[0-9]/) && password.match(/[A-Za-z]/))) {
    return "Password must contain digits and numbers";
  }
}
