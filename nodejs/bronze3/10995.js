let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let stars = new Array(N).fill('*').join(' ');
let output = '';
for (i = 0; i< N; ++i) {
    if (i % 2 === 0) {
        output += `${stars}\n`;
    } else {
        output += ` ${stars}\n`;
    }
}
console.log(output);