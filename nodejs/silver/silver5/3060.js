let [T, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
T = +T;

let output = new Array(T);
for (let t = 0; t < T; ++t) {
    let N = +input[2*t];
    let needs = input[2*t + 1].split(' ').map(Number);

    let day = 1;
    while (true) {
        let sum = needs.reduce((a,b) => a+b);
        if (N < sum) break;

        let newNeeds = [...needs];
        for (let i = 0; i < 6; ++i) {
            newNeeds[i] +=  needs[(i+5) % 6];
            newNeeds[i] +=  needs[(i+7) % 6];
            newNeeds[i] +=  needs[(i+3) % 6];
        }

        day++;
        needs = newNeeds;
    }

    output[t] = day;
}

console.log(output.join('\n'))