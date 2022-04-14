function findNextSquare(num) {
  if (Number.isInteger(Math.sqrt(num))) {
    num++;
    while (!Number.isInteger(Math.sqrt(num))) {
      num++;
    }
    return num;
  } else return -1;
}
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
