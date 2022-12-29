let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = +input[0];
const map = {
    "TTT" : 0, "TTH" : 1, "THT" : 2, "THH" : 3,
    "HTT" : 4, "HTH" : 5, "HHT" : 6, "HHH" : 7
}

let output = '';
for (let i = 1; i <= T; ++i) {
    const list = [0, 0, 0, 0, 0, 0, 0, 0];
    const str = input[i];
    for (let j = 0; j < 38; ++j) {
        list[map[str.substring(j, j+3)]]++;
    }

    output += `${list.join(' ')}\n`;
}
console.log(output);