let [N, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+N);
for (let i = 0 ; i < +N; ++i) {
    let words = input[i*2 + 1].split(' ');
    let word = '';
    let top = '';
    for (let c of words) {
        if (top === '') {
            word = c;
            top = c;
        } else if (top >= c) {
            word = `${c}${word}`;
            top = c;
        }
        else word = `${word}${c}`

    }
    output[i] = word;
}
console.log(output.join('\n'));