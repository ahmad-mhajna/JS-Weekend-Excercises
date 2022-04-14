function maskify(password) {
  for (let i = 0; i < password.length - 4; i++) {
    password = password.replace(password[i], "#");
  }
  return password;
}
console.log(maskify(`4556364607935616`));
console.log(maskify(`64607935616`));
console.log(maskify(`Nananananananananananananananana Batman!`));
