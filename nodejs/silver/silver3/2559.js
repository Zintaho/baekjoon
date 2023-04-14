let [NK, input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = NK.split(' ').map(x=>+x);
input = input.split(' ');
input.forEach((x, i) => {
    if (i === 0) input[i] = Number(x);
    else {
        input[i] = input[i-1] + Number(x);
    }
});

K = +K
let max = input[K - 1];
let [a,b] = [0, K];
while (b !== +N) {
    let sum = input[b++] - input[a++];
    if (sum > max) max = sum;
}

console.log(max);