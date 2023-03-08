let [N, input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.split(' ').map(x=>+x).sort((a,b) => a-b);
console.log(input.join(' '));