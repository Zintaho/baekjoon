let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let inputs = [];
rl.on('line', (line) => inputs.push(line))
  .on('close', () => {
    let [n, ...input] = inputs;
    n = +n;
    if (n === 0) {
        console.log(0);
        return;
    }
    input.forEach((x,i) => input[i] = +x);
    input.sort((a,b) => a-b);

    let a = Math.round(n* 0.15);
    let b = n - a;
    input = input.slice(a,b);
    let sum = input.reduce((a,b) => a+b);
    sum = Math.round(sum/input.length);
    console.log(sum);
    process.exit();
});