let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
let output = '';
rl.on('line', (line) => input.push(line))
  .on('close', () => {
    let N = parseInt(input[0], 10);
    for (let i = 1; i <= N; ++i) {
        let alphabets = new Set('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
        for (let c of input[i]) {
            alphabets.delete(c);
        }
        let sum = 0;
        alphabets.forEach((a) => sum += a.charCodeAt(0));
        output += `${sum}\n`;
    }
    console.log(output);
    process.exit();
});
