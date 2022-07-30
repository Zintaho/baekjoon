let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let NM = input[0].split(' ').map(x => parseInt(x));
let N = NM[0];
let M = NM[1];
let output = '';
for (y = 0; y < N; ++y) {
    let Ay = input[1+y].split(' ').map(x => parseInt(x));
    let By = input[1+N+y].split(' ').map(x => parseInt(x));
    let temp = '';
    for (x = 0; x< M; ++x) {
        temp += `${Ay[x] + By[x]} `
    }
    temp.trimEnd();
    temp += '\n';
    output += temp;
}
console.log(output);
