let input = require('fs').readFileSync('/dev/stdin').toString().trim() + 'Z';

let bias = new Date(input);
let year = bias.getUTCFullYear();
let a = `${year}-01-01T00:00:00.000Z`;
a = new Date(a);
let b = `${year+1}-01-01T00:00:00.000Z`;
b = new Date(b);

[bias, a, b] = [bias.getTime(), a.getTime(), b.getTime()];

let k = (bias-a)*100/(b-a);
if (k === parseInt(k)) {
    k += '.0';
}

console.log(k);