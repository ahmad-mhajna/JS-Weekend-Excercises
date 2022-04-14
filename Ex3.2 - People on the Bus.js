const busstops = [
  [13, 0],
  [0, 5],
  [8, 6],
  [0, 1],
  [0, 5],
];
function peopleinbus(busStops) {
  let inbus = 0;
  for (let i in busStops) {
    inbus += busStops[i][0];
    inbus -= busStops[i][1];
  }
  inbus = inbus < 0 ? 0 : inbus;
  return inbus;
}
console.log(peopleinbus(busstops));
