let input = require('fs').readFileSync('/dev/stdin').toString().trim();
input = input.replaceAll("XXXX", "AAAA");
input = input.replaceAll("XX", "BB");
console.log(input.includes('X')?-1:input);