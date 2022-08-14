let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let [A,B,C,D] = input.map(x => parseInt(x, 10));
let AB_CD = Math.abs((A+B) - (C+D));
let AC_BD = Math.abs((A+C) - (B+D));
let AD_BC = Math.abs((A+D) - (B+C));
console.log(Math.min(AB_CD, AC_BD, AD_BC));