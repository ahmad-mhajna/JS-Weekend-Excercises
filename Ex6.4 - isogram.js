function isIsogram(string) {
  string = string.toLowerCase();
  let stringCopy = Array.from(new Set(string)).join("");
  return string === stringCopy ? true : false;
}
console.log(isIsogram("Dermatoglyphics")); // == true
console.log(isIsogram("aba")); // == false
console.log(isIsogram("moOse")); // == false
