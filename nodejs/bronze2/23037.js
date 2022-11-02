let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
console.log(input.map(x=>Math.pow(parseInt(x),5)).reduce((a,b)=>a+b));