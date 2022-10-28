let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let output = '';
for (let x = 1; x <= N; ++x) {
    output += "* ".repeat(Math.floor((N+1)/2));
    output += '\n'
    output += " *".repeat(Math.floor(N/2));
    output += '\n'
}
console.log(output.trim());