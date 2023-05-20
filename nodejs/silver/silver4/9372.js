let [T, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+T);
let i = 0;
for (let t = 0 ;t < +T; ++t) {
    let [N, M] = input[i].split(' ').map(x=>+x);
    output.push(N-1);
    i += (M+1);
    // let count = new Array(+N).fill(0);
    // for (let m = 0; m < M; ++m, ++i) {
        
    // }
}
console.log(output.join('\n').trim());