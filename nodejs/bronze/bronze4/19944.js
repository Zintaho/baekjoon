let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N, M] = input.map(x=>parseInt(x, 10));
if (M == 1 || M == 2) console.log("NEWBIE!");
else if (N >= M) console.log("OLDBIE!");
else console.log("TLE!");