let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
console.log(input.sort((a,b)=>b-a).join('\n'));
