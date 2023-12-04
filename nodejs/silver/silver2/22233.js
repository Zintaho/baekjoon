let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let [N, M] = [0, 0];
let set = new Set();
let output = new Array();
rl.on('line', (line) => {
    if (N === 0 && M === 0) [N, M] = line.split(' ').map(x=>+x);
    else if (N-- > 0) {
        set.add(line);
    } else {
        line.split(',').forEach(x=>set.delete(x));
        output.push(set.size);
    }
})
  .on('close', () => {
    console.log(output.join('\n'));
    process.exit();
});