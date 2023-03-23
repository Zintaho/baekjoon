let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let k = 0;
let N = 0;
let MEM = 2500;
let memory = null;
let mins = [];
rl.on('line', (line) => {
    if (k === 0) {
        N = +line; 
        if (N < MEM) MEM = N;
        k++; return;
    }
    if (k % MEM === 1) {
        memory = new Array(MEM).fill(101);
    }
    memory[k%MEM] = Number(line);
    if (k % MEM === 0 || k === N) {
        memory.sort((a,b) => a-b);
        mins = [...mins, ...memory.slice(0,7)];
    }    
    ++k;
})
  .on('close', () => {
    mins.sort((a,b) => a-b);
    mins = mins.slice(0,7).map(x=>x.toFixed(3));
    console.log(mins.join('\n'));
    process.exit();
});