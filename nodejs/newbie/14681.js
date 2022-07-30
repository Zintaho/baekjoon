let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
let output = 1;
rl.on('line', (line) => input.push(line))
  .on('close', () => {
    input = input.map(x => parseInt(x));
    let a = input[0];
    let b = input[1];
    if (a < 0 && b > 0) output = 2;
    if (a < 0 && b < 0) output = 3;
    if (a > 0 && b < 0) output = 4;
    console.log(output);
    process.exit();
});