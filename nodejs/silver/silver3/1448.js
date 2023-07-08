let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>+x);
input.sort((a,b) => b-a);
let result = -1;
for (let i = 0; i < +N - 1; ++i) {
    let [a,b,c] = [input[i], input[i+1], input[i+2]];
    if (a < b+c) {
        result = a+b+c;
        break;
    }
}
console.log(result);