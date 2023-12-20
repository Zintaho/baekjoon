let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let l = 0;
let [n, m] = [0, 0];
let output = [];

let roots = null;

rl.on('line', (line) => {
    if (l++ === 0) {
        [n, m] = line.split(' ').map(x=>+x);
        roots = Array.from({length: n+1}, (_, i) => i);
    } else {
        let [cmd, a, b] = line.split(' ').map(x=>+x);
        switch(cmd) {
            case 0:
                let root = roots[a];
                while(true) {
                    let parent = roots[b];
                    roots[b] = root;
                    if (b===parent) break;
                    b = parent;
                }

                break;
            case 1:
                let A = roots[a];
                while (true) {
                    A = roots[a];
                    if (A === roots[A]) break;

                    roots[a] = roots[A];
                    a = A;
                }
                let B = roots[b];
                while (true) {
                    B = roots[b];
                    if (B === roots[B]) break;

                    roots[b] = roots[B];
                    b = B;
                }
                output.push(A===B?'YES':'NO');
                break;
        }
    }
})
  .on('close', () => {
    console.log(output.join('\n'));
    process.exit();
});