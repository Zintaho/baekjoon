let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim());
let output = '';
for (let i = 0; i< N; ++i) {
    output += "SciComLove\n";
}
console.log(output);