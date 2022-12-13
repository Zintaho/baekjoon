let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let X = parseInt(input[0]);
let N = parseInt(input[1]);
let k = 0;
for (i = 2; i < N+2; ++i) {
    let ab = input[i].split(' ').map(x=>parseInt(x));
    k += ab[0]*ab[1];
}
console.log(X === k? 'Yes' : 'No');