let [N, input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let sum = 0;
input = input.split(' ');
input.forEach((x,i) => {
    x = +x;
    input[i] = x;
    sum += x;
});
input.sort((a,b) => a-b);
let result = 0;
for (let i = 0; i < N; ++i) {
    let k = input[i];
    sum -=k;
    result += (sum * k);
}
console.log(result);