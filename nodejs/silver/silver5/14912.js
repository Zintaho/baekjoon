let [n,d] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let sum = 0;
let reD = new RegExp(`${d}`,'g');
for (let i = 1 ; i <= n ;++i) {
    let str = i.toString();
    sum += (str.length - str.replace(reD, '').length);
}
console.log(sum);