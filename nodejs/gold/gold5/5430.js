let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let T = 0;
let i = 0;

let p = '';
let n = 0;

let output = [];

rl.on('line', (line) => {
    if (i === 0) T = +line;
    else {
        if (i % 3 === 1) {
            p = line;
        } else if (i % 3 === 2) {
            n = +line;
        } else if (i % 3 === 0) {
            let isValid = true;

            line =  `${line.substring(1, line.length-1)}`;
            let arr = line.length>0 ? line.split(',').map(x=>+x) : [];

            let [left, right, reversed] = [0, n, false];
            for (let c of p) {
                switch(c) {
                    case 'R':
                        reversed = !reversed;
                        break;
                    case 'D':
                        if (reversed) right--;
                        else left++;

                        break;
                }
                if (left > right) {
                    isValid = false;
                    break;
                }
            }

            if (isValid) {
                let answer = arr.slice(left, right);
                if (reversed) answer = answer.reverse();
                output.push(`[${answer}]`);
            } else output.push('error');
        }
    }
    i++;
})
  .on('close', () => {
    console.log(output.join('\n'));
    process.exit();
});