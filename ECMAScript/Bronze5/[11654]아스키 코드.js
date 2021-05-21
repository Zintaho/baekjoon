const readline = require('readline');
const reader = readline.createInterface({input: process.stdin, output:process.stdout});
let input;

reader.on("line", (line) => {
    input = line;
}).on("close", () => {
    console.log(input.charCodeAt(0));

    process.exit();
})
