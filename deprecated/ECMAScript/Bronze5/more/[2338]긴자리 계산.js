const readline = require('readline');
const reader = readline.createInterface({input: process.stdin, output:process.stdout});

let inputs = new Array();
reader.on("line", (line) => {
    inputs.push(line);
}).on("close", () => {
    inputs = inputs.map(el => BigInt(el));
    const a = inputs[0];
    const b = inputs[1];
    console.log((a+b).toString());
    console.log((a-b).toString());
    console.log((a*b).toString());

    process.exit();
})
