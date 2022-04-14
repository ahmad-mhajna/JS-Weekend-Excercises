let nums = [19, 5, 42, 2, 77];
let nums2 = [10, 343445353, 3453445, 3453545353453];

function sumoflowest(array) {
  array.sort((a, b) => a - b);
  let sum = array[0] + array[1];
  console.log(sum);
}
sumoflowest(nums2);
