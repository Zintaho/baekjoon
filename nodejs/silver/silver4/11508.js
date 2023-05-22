
let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', (line) => input.push(line))
  .on('close', () => {
    let [N, ...C] = input;

    N = +N;
    C = C.map(x=>+x);
    C.sort((a,b) => b-a);
    let sum = 0;
    for (let i = 0; i < N; ++i) {
        if (i%3 === 2) continue;
        sum += C[i];
    }
    console.log(sum);
    process.exit();
});