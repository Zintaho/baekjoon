const readline = require('readline');
const reader = readline.createInterface({input: process.stdin, output:process.stdout});
let arr;

reader.on("line", (line) => {
    arr = line.split(' ').map(el => parseInt(el));
}).on("close", () => {
    const a = arr[0];
    const b = arr[1];
    console.log(a*(b-1) + 1)

    process.exit();
})
