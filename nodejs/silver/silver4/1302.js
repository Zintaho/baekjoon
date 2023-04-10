let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input.sort();
let [output, cnt, max, prev] = [input[0], 1, 0, input[0]];
for (let name of input.slice(1)) {

    if (name === prev) cnt++;
    else {
        if (cnt > max) {
            max = cnt;
            output = prev;
        }
        cnt = 1;
    }
    prev = name;
}
if (cnt > max) output = prev;

console.log(output);