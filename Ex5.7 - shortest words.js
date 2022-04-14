const wordsArray = [`dog`, `cat`, `short`, `long`, `usually`, `answer`];

const findShortestWord = (words) => {
  return words.sort(function (a, b) {
    return a.length - b.length;
  })[0].length;
};
console.log(findShortestWord(wordsArray));
