const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
let lettersinwords = {};
function counting(array) {
  let dupes = 0;
  for (let j in array) {
    let string = array[j];
    string = string.toLowerCase();
    string = string.replace(" ", "");
    for (let i = 0; i < string.length; i++) {
      let char = string.charAt(i);
      if (lettersinwords[char]) {
        lettersinwords[char]++;
      } else {
        lettersinwords[char] = 1;
      }
    }
  }
  for (letter in lettersinwords) {
    if (lettersinwords[letter] > 1) dupes++;
  }
  return dupes;
}

console.log(counting(array));
