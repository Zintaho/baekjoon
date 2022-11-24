let N = +(require('fs').readFileSync('/dev/stdin').toString().trim());
let sum = 1n;
let z = 1;
let zCount = 0;
for (let k = 1; k <=N; ++k) {
    sum *= 5n;
    const newZ = parseInt(sum.toString()[0]);
    if (newZ > z) zCount++;
    z = newZ;
}
let zStr = zCount >0? `0.${'0'.repeat(zCount-1)}`:'';
console.log(`${zStr}${sum.toString()}`);