let [RC, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [R, C] = RC.split(' ').map(x=>+x);
answer();

function answer() {
for (let r = 0; r < R; ++r) {
    let temp = '';
    for (let c = 0; c < C; ++c) {
        let a = input[r][c];
        if (a === '.') a = 'D';
        else if (a === 'W') {
            if (((r-1 >= 0 && input[r-1][c]) === 'S') 
            ||  ((r+1 < R && input[r+1][c])  === 'S')
            ||  ((c-1 >= 0 && input[r][c-1])  === 'S')
            ||  ((c+1 < C && input[r][c+1])  === 'S')
            ) {
                console.log(0);
                return;
            } 
        }
        temp += a;
    }
    input[r] = temp;
}
console.log(1);
console.log(input.join('\n'));
}