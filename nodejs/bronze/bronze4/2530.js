let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let hms = input[0].split(' ').map(x => parseInt(x));
let delta = parseInt(input[1]);
hms[2] += delta;
if (hms[2] >= 60) {
    hms[1] += Math.floor(hms[2]/60)
    hms[2] = hms[2] % 60;
}
if (hms[1] >= 60) {
    hms[0] += Math.floor(hms[1]/60)
    hms[1] = hms[1] % 60;
}
hms[0] = hms[0]%24;
console.log(`${hms[0]} ${hms[1]} ${hms[2]}`);