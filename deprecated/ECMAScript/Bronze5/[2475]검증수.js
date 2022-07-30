const readline = require('readline');
const reader = readline.createInterface({input: process.stdin, output:process.stdout});
let arr;

reader.on("line", (line) => {
    arr = line.split(' ').map(el => parseInt(el) * parseInt(el));
}).on("close", () => {
    const c = arr.reduce((a, b) => a + b) % 10
    console.log(c);

    process.exit();
})
