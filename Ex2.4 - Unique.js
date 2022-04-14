let findUniq1 = [1, 1, 1, 2, 1, 1]; //=== 2
let findUniq2 = [0, 0, 0.55, 0, 0]; //=== 0.55
function findTheOddOne(array) {
  for (let i = 0; i < array.length; i++) {
    let previous = i - 1;
    let next = i + 1;

    if (i == array.length - 1) {
      next = 0;
    }

    if (array[i] != array[previous] && array[i] != array[next]) {
      return array[i];
    }
  }
}
console.log(findTheOddOne(findUniq2));
