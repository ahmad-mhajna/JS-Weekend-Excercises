function nameToinitials(fullname) {
  index = fullname.indexOf(` `) + 1;
  firstinitial = fullname.slice(0, 1).toUpperCase();
  lastinitial = fullname[index].slice(0, 1).toUpperCase();
  let initials = firstinitial + `.` + lastinitial;
  return initials;
}
console.log(nameToinitials(`Sam Harris`));
console.log(nameToinitials(`Patrick Feeney`));
