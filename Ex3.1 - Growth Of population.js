function nb_year(population, percent, aug, goal) {
  let num = population;
  let p = percent / 100;
  let i = 0;
  while (num <= goal) {
    num += num * p + aug;
    i++;
  }
  return i;
}
console.log(nb_year(1000, 2, 50, 1200));
console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));
