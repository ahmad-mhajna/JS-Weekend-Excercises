function organizeString(s1, s2) {
  let string = "";
  string = s1.toLowerCase() + s2.toLowerCase();
  string = new Set(string);
  string = Array.from(string);
  string.sort();
  string = string.join("");
  return string;
}
console.log(organizeString("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
