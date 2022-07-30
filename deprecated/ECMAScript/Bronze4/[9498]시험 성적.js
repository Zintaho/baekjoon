const readline = require('readline');
const reader = readline.createInterface({input: process.stdin, output:process.stdout});
let y;

reader.on("line", (line) => {
    y = line.split(' ').map(el => parseInt(el));
}).on("close", () => {
    y = Math.floor(y/10)
    b = {10: 'A', 9: 'A', 8: 'B', 7: 'C', 6: 'D'};
    r = b[y] || 'F';
    console.log(r);

    process.exit();
})
