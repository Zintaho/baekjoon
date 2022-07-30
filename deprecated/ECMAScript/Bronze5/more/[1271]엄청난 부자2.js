const readline = require('readline');
const reader = readline.createInterface({input: process.stdin, output:process.stdout});
reader.on("line", (line) => {
    input = line.split(' ').map(el => BigInt(el));
}).on("close", () => {
    const a = input[0];
    const b = input[1];
    console.log(a/b + '\n' + (a%b));
    process.exit();
})
