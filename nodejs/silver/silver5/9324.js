let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+N);

let A = 'A'.charCodeAt(0);
input.forEach((str, i) => {
    let counts = new Array(26).fill(0);
    let isFake = false;

    for (let j = 0; j < str.length; ++j) {
        let c = str[j];
        let k = str.charCodeAt(j) - A
        counts[k]++;
        if (counts[k] % 3 === 0) {
            if (c !== str.charAt(j+1)) {
                isFake = true;
                break;
            } else {
                ++j;
            }
        }
    }

    output[i] =  isFake?'FAKE':'OK';
});

console.log(output.join('\n'));