const accum = (str) => {
  const arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].repeat(i + 1).replace(arr[i], arr[i].toUpperCase());
  }
  str = arr.join("-");
  console.log(str);
};
accum("abcd");
