let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = [];
let i = 0;
while (true) {
    let k = +input[i++];
    if (k === 0) break;

    let words = new Array(k);
    for (let j = 0; j < k; ++j) {
        words[j] = input[i++];
    }
    words.sort((a,b) => {
        const A = a.toLowerCase();
        const B = b.toLowerCase();
        if (A>B) return 1;
        else if (A===B) return 0;
        else return -1;
    });
    output.push(words[0]);
}
console.log(output.join('\n'));