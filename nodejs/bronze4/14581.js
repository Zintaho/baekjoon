let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let output = `:fan::fan::fan:
:fan::${input}::fan:
:fan::fan::fan:`;
console.log(output);