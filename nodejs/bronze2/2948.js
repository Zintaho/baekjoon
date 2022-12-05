let [D, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let mD = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
let wd = ["Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday"];
let days = mD[M-1] + (D-1);
console.log(wd[days%7]);