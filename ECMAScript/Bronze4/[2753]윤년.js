const readline = require('readline');
const reader = readline.createInterface({input: process.stdin, output:process.stdout});
let y;

reader.on("line", (line) => {
    y = line.split(' ').map(el => parseInt(el));
}).on("close", () => {
    const r = (!(y%4) && (y%100)) || (!(y%400)) ? 1 : 0;
    console.log(r);

    process.exit();
})
