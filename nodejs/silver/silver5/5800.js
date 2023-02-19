let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let K = +input[0];
let output = [];
for (let i = 1; i <= K; ++i) {
    output.push(`Class ${i}`);
    let row = input[i].split(' ').map(x=>+x);
    let N = row[0];
    row.shift();
    row.sort((a,b)=>b-a);
    let [max, min, gap] = [row[0], row[N-1], 0];
    for (let j = 0; j < N-1; ++j) {
        let _gap = row[j] - row[j+1];
        if (_gap > gap) gap = _gap;
    }
    output.push(`Max ${max}, Min ${min}, Largest gap ${gap}`);
}
console.log(output.join('\n'));