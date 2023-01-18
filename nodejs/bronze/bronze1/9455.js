let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let k = 0;
let output = '';
for (let t = 0; t < +T; ++t) {
    let [m,n]= input[k].split(' ').map(a=>+a);

    let sum = 0;
    let f = 0;
    let blocks = new Array(n).fill(0);
    for (let y = k+m; y >= k+1; --y) {
        let row = input[y].split(' ').map(a=>+a)
        for (let x = 0; x < n; ++x) {
            sum += row[x] * (f - blocks[x]);
            if (row[x]) blocks[x]++;
        }
        ++f;
    }
    output += `${sum}\n`;
    k += (m+1);
}
console.log(output);