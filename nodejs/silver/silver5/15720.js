let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input[0] = input[0].split(' ').map(x=>+x);
let A = Math.min(...input[0]);
let [whole, saled] = [0,0];
for (let i = 1; i <= 3; ++i) {
    input[i] = input[i].split(' ').map(x=>{
        x=+x;
        whole += x;
        x*=0.1;
        return x;
    }).sort((a,b)=>a-b);
}
saled = whole * 0.9;
for (let i = 1; i <= 3; ++i) {
    for (let j = 0; j < input[0][i-1] - A; ++j){
        saled += input[i][j];
    }
}
console.log(`${whole}\n${saled}`);