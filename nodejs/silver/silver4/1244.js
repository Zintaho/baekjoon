let [S, switches, N, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[S, N] = [+S, +N];
switches = switches.split(' ').map(x=>x==='1');
for (let i = 0; i < N; ++i) {
    let [gender, target] = input[i].split(' ');
    target = +target;
    switch (gender) {
        case '1':
            for (let j = (target - 1); j < switches.length; j += target) {
                switches[j] = !switches[j];
            }
            break;
        case '2':
            switches[target - 1] = !switches[target - 1];
            for (let j = (target - 2); j >= 0; --j) {
                let k = 2*target - j - 2;
                let [a,b] = [switches[j], switches[k]];
                if (a === b) {
                    switches[j] = !switches[j];
                    switches[k] = !switches[k];
                } else {
                    break;
                }
            }
            break;
    }
}
let output = [];
for (let i = 0; i < Math.ceil(switches.length/20); ++i) {
    output.push(switches.slice(i*20, i*20+20).map(x=>x?'1':'0').join(' ').trim());
}
console.log(output.join('\n'));