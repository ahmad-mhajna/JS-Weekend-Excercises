let Testing1 = [0, 0, 0, 1];
let Testing2 = [0, 0, 1, 0];
let Testing3 = [0, 1, 0, 1];
let Testing4 = [1, 0, 0, 1];
let Testing5 = [0, 0, 1, 0];
let Testing6 = [0, 1, 1, 0];
let Testing7 = [1, 1, 1, 1];
let Testing8 = [1, 0, 1, 1];

function binaryArrayToNumber(arr) {
  let num = 0;
  let pow = 0;
  let count = arr.length - 1;

  for (i = count; i >= 0; i--) {
    num += Math.pow(2, pow++) * arr[i];
  }

  console.log(num);
  return num;
}
binaryArrayToNumber(Testing1);
binaryArrayToNumber(Testing2);
binaryArrayToNumber(Testing3);
binaryArrayToNumber(Testing4);
binaryArrayToNumber(Testing5);
binaryArrayToNumber(Testing6);
binaryArrayToNumber(Testing7);
binaryArrayToNumber(Testing8);
