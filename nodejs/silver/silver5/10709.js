let [HW, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [H, W] = HW.split(' ').map(x=>+x);
let output = new Array(H);
for (let h = 0; h < H; ++h) {
    let row = input[h];
    let result = new Array(W);

    let k = -1;
    let clouded = false;
    for (let w = 0; w < W; ++w) {
        let c = row.charAt(w);
        if (c === 'c') {
            k = 0;
            clouded = true;
        }
        else if (clouded) k++;
        result[w] = k;
    }
    output.push(result.join(' '));
}
console.log(output.join('\n').trimStart());