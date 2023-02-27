let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(3);
input.forEach((row, index) => {
    row = row.split(' ');
    input[index] = [+row[2], +row[0], +row[1]];
});
input = input.sort((a,b) => b[0]-a[0]);

let cntMap = {}
let i = 0;
for (let row of input) {
    let [, team, number] = row;
    if (team in cntMap) cntMap[team]++;
    else cntMap[team] = 1;

    if (cntMap[team] < 3) {
        output[i++] = `${team} ${number}`;
    }
    if (i === 3) break;
}


console.log(output.join('\n'));