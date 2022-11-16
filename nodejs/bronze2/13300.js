let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = input[0].split(' ').map(x=>parseInt(x, 10));
let students = new Array(12).fill(0);
for (let i = 1; i<= N; ++i) {
    let [S,Y] = input[i].split(' ').map(x=>parseInt(x, 10));
    students[2*(Y-1) + S]++;
}
let sum = 0;
for (let i = 0; i < 12; ++i) {
    sum += Math.ceil(students[i]/K);
}
console.log(sum);