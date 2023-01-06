let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = input[0].split(' ').map(x=>+x);
let output = '';
for (let n = 1; n <= N; ++n) {
    let temp = '';
    for (let k = 0; k < N; ++k) {
        temp += (input[n][2*k]+' ').repeat(K);
    }
    temp = (temp.trim()+'\n').repeat(K);
    output += temp;
}
console.log(output.trim());