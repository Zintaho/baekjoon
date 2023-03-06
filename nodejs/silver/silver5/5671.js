let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = [];
for (let row of input) {
    let [N,M] = row.split(' ').map(x=>+x);
    let sum = 0;
    for (let i = N; i <= M; ++i) {
        let set = new Set();
        let str = i.toString(10).split('');
        str.forEach((x,j) => set.add(x));

        if (str.length === set.size) ++sum;
    }
    output.push(sum);
}
console.log(output.join('\n'));