const readline = require('readline');
const reader = readline.createInterface({input: process.stdin, output:process.stdout});
let arr;

reader.on("line", (line) => {
    arr = line.split(' ').map(el => parseInt(el));
}).on("close", () => {
    const a = arr[0];
    const b = arr[1];
    const r = a > b? '>' : (a < b? '<' : '==')
    console.log(r);

    process.exit();
})
