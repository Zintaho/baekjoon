let [P, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let output = new Array(+P);
for (let p = 0; p < +P; ++p) {
    let [T, ...nums] = input[p].split(' ').map(Number);

    let sum = 0;
    for (let i = 0; i < 20; ++i) {
        let a = nums[i];
        for (let j = 0; j < i; ++j) {
            let b = nums[j];
            if (a < b) sum++;
        }
    }

    output[p] = `${T} ${sum}`
}

console.log(output.join('\n'))