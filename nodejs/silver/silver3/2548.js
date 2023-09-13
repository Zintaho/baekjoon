let [N, input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.split(' ').map(x=>+x);
let [min, max] = [10001, 0];
input.forEach(x=> {
    min = Math.min(min, x);
    max = Math.max(max, x);
});
let minSum = undefined;
let minI = max;
for (let i = max; i >= min; --i) {
    let sum = 0;
    input.forEach(x=> sum += Math.abs(x-i));
    if (minSum === undefined) minSum = sum;
    else if (minSum >= sum) {
        minSum = sum;
        minI = i;
    }
}
console.log(minI);