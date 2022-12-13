let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [max, X, Y] = [0, 1, 1];
for (y = 0; y < 9 ; ++y) {
    let nums = input[y].split(' ').map(x=>parseInt(x, 10));
    for (x = 0; x < 9; ++x) {
        if (nums[x] > max) [max, X, Y] = [nums[x], x+1, y+1]
    }
}
console.log(`${max}\n${Y} ${X}`);