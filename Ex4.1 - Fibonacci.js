function FibonaccSequence(startfrom, num) {
  let n1 = startfrom === 0 ? 0 : 1;
  let n2 = 1;
  let nextTerm;
  for (let i = 0; i < num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
}
FibonaccSequence(0, 10);
