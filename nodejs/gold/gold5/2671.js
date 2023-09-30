let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let RE = new RegExp(/^(100+1+|01)+$/g);

console.log(input.search(RE)===0?'SUBMARINE':'NOISE');