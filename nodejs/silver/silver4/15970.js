let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let inputs = [];
let sum = 0;

rl.on('line', (line) => inputs.push(line))
  .on('close', () => {
    let [N, ...input] = inputs;

    input.forEach((x, i) => {
        input[i] = x.split(' ').map(x=>+x);
    });
    input.sort((a,b) => a[0] - b[0]);
    
    let map = {};
    for (let n = 0; n < +N; ++n) {
        let [p, c] = input[n];
        if (c in map) {
            map[c].push(p);
        } else {
            map[c] = [p];
        }
    }
    
    for (let [, point] of Object.entries(map)) {
        for (let i = 0; i < point.length; ++i) {
            let a = (i-1)>=0?point[i-1]:undefined;
            let b = point[i];
            let c = (i+1)<point.length?point[i+1]:undefined;
    
            let [A, B] = [a!==undefined?(b-a):undefined, c!==undefined?(c-b):undefined];
    
            if (A&&B) sum += Math.min(A,B);
            else if (A) sum += A;
            else if (B) sum += B;
        }
    }
    
    console.log(sum);

    process.exit();
});