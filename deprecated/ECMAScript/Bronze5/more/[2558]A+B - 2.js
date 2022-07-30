const readline = require('readline');
const reader = readline.createInterface({input: process.stdin, output:process.stdout});
let arr = Array();

reader.on("line", (line) => {
    arr.push(parseInt(line));
}).on("close", () => {
    console.log(arr[0] + arr[1])

    process.exit();
})
