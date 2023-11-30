let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let i = 0;
let T = 0;
let N = 0;
let output = undefined;
rl.on('line', (line) => {
    if (i === 0) {
        T = +line;
        output = new Array(T);
    }
    else if (i %2 === 1) N = +line;
    else {
        costs = line.split(' ').map(x=>+x);
        let maxes = new Array(N);
        let max = 0;
        for (let i = N-1; i >= 0; --i) {
            max = Math.max(costs[i], max);
            maxes[i] = max;
        };
        
        let sum = 0n;
        for (let i = 0; i < N; ++i) {
            sum += BigInt(maxes[i] - costs[i]);
        }
        output[i/2-1] = sum;
    }
    i++;
})
  .on('close', () => {
    console.log(output.join('\n'));
    process.exit();
});