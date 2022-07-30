const readline = require('readline');
const reader = readline.createInterface({input: process.stdin, output:process.stdout});
let arr = Array();

reader.on("line", (line) => {
    arr.push(line.split(' ').map(el => parseInt(el)));
}).on("close", () => {
    sg = arr[0][0] * arr[0][1]
    console.log(arr[1].map(el => el - sg).join(' '))

    process.exit();
})
