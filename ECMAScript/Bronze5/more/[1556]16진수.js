const readline = require('readline');
const reader = readline.createInterface({input: process.stdin, output:process.stdout});

reader.on("line", (line) => {
    input = line;
}).on("close", () => {
    console.log(parseInt(input, 16));
    process.exit();
});