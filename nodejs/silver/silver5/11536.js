
let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', (line) => {
    input.push(line)
})
  .on('close', () => {
    let N = +input[0];
    let sum = 0;
    for (let n = 1; n <  N; ++n) {
        let [a,b] = [input[n], input[n+1]];
        if (a > b) sum++;
        else if (a < b) sum--;
    }
    
    let output = '';
    if (sum === N-1) output = "DECREASING";
    else if (sum === -(N-1)) output = "INCREASING";
    else output = "NEITHER";
    
    console.log(output);
    process.exit();
});
