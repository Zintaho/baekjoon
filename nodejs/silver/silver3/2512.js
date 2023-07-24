let [N, input, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[N, M] = [+N, +M];
input = input.split(' ').map(x=>+x);

let temp = 0;
while (input.length > 0) {

    temp = Math.floor(M/N);
    let bigger = [];
    let sum = 0;

    let max = 0;
    for (let x of input) {
        if (x <= temp) sum += x;
        else bigger.push(x);
        max = Math.max(x,max);
    }

    M -= sum;
    if (N === bigger.length) break;
    N = bigger.length;
    if (N === 0) {
        temp = Math.min(temp, max);
        break;
    }
    
    input = [...bigger];
}

console.log(temp);