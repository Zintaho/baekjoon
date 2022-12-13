let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0], 10);
let memo = new Array(15);
for (let i = 0; i <= 14; ++i) memo[i] = new Array(15).fill(0);
for (let i = 1; i <= 14; ++i) memo[0][i]= i;

let get = (k, n) => {
    if (memo[k][n] !== 0) return memo[k][n];
    else {
        let sum = 0;
        for (let i = 1; i <=n; ++i) {
            sum += get(k-1, i);}
            
        memo[k][n] = sum;
        return sum;
    }
}

let output = '';
for (let t = 1; t <= T; ++t) {
    let [k, n] = input.slice(2*t-1, 2*t+1).map(x=>parseInt(x, 10));
    output += `${get(k, n)}\n`;
} 
console.log(output);