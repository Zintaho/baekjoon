let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

let output = new Array(N);
for (let i = 0; i < N; ++i) {
    let cnt = 0;
    let x = input[i];
    while (x !== '6174') {
        let [upper, lower] = [x.split(''), x.split('')];
        upper.sort((a,b) => b-a);
        lower.sort();

        upper = Number(upper.join(''));
        lower = Number(lower.join(''));
        x = (upper-lower).toString();
        if (x.length < 4) {
            x += '0'.repeat(4 - x.length);
        }
        cnt++;
    }
    output[i] = cnt;
}

console.log(output.join('\n'));