let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N; input = input.split(' ');
input.forEach((x, i) => input[i] = [+x, i]);
input.sort((a,b) => a[0] - b[0]);

let arr = new Array(N);
input.forEach((x, i)=>arr[x[1]] = i);
console.log(arr.join(' '));