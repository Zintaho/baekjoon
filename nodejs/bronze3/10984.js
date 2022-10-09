let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
let output = '';
rl.on('line', (line) => input.push(line))
  .on('close', () => {
    let N = parseInt(input[0], 10);
    let k = 1;
    for (let i = 1; i <= N; ++i) {
        let T = parseInt(input[k], 10);
        let C = 0;
        let G = 0;
        for (let j = 1; j <= T; ++j) {
            let [c,g] = input[k+j].split(' ');
            C += parseInt(c, 10);
            G += c * parseFloat(g);
        }
        output += `${C} ${(G/C).toFixed(1)}\n`
        k += (T+1);
    }
    console.log(output);
    process.exit();
});