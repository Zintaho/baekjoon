let [NS, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, S] = NS.split(' ').map(Number);
input = input.split(' ').map(Number);

let output = 0;
dfs();
console.log(output);
function dfs(i = 0, sum = 0, cnt=0) {
    if (i === N && sum === S && cnt > 0) {output ++; return;}
    else if (i === N) return;
    
    dfs(i+1, sum, cnt);
    dfs(i+1, sum+input[i], cnt+1);
}