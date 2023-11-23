let [n, abc] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n =+n;
let sum = 0;
abc = abc.split(' ').forEach(x=>{
    x = +x;
    sum += n>=x?x:n;
});
console.log(sum);