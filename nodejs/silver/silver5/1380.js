let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let i = 0;
let N = +input[i++];
let k = 1;

let output = [];
while (N > 0) {
    let set = new Set();
    let students = input.slice(i, i+N);
    i += N;

    let sequence = input.slice(i, i+2*N - 1);
    i += 2*N - 1;
    for (let j = 0; j < 2*N - 1; ++j) {
        let [a, b] = sequence[j].split(' ');
        let name = students[+a - 1];
        if (set.has(name)) set.delete(name);
        else set.add(students[+a - 1]);
    }

    output.push(`${k++} ${set.keys().next().value}`);

    N = +input[i++];
}

console.log(output.join('\n'))