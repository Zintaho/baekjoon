let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
input = input.map(x=>parseInt(x, 10));

let odds = input.filter(x=>x%2===1);
if (odds.length > 0) odds = odds.reduce((a,b) => a*b);
else odds = 0;

let evens = input.filter(x=>x%2===0);
if (evens.length > 0) evens = evens.reduce((a,b) => a*b);
else evens = 0;

if (odds === 0) console.log(evens);
else console.log(odds);
