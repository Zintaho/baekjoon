let [N,input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let regex = new RegExp(/\d+/g);
let nSum = (N-1)*N/2;
let aSum = 0;
let found = 0;
while (found = regex.exec(input)) {
    aSum += +found[0];
}

console.log(aSum - nSum);