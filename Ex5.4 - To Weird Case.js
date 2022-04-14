function evenCasing(string) {
  let words = string.split(" ");
  for (let w in words) {
    let word = words[w];
    let i = 0;
    while (i < word.length - 1) {
      word = word.replace(word[i], word[i].toUpperCase());
      i += 2;
    }
    words[w] = word;
  }
  string = words.join(" ");
  return string;
}
console.log(evenCasing(`string`));
console.log(evenCasing(`weird string case`));
