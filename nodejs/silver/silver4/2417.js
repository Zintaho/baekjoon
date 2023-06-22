let N = require('fs').readFileSync('/dev/stdin').toString().trim();
N = BigInt(N);

newton_raphson(N);

function newton_raphson(N) {
    if (N === 0n) {
        console.log(0);
        return;
    }
    
    const fx = (x) => x*x - N;
    const fxD = (x) => 2n*x;

    let x = N;
    while (true) {
        let x1 = x - fx(x)/fxD(x);
        if (x1 === x) break;

        x = x1;
    }
    if ((x-1n)*(x-1n) === N) x--;
    console.log(x.toString());
}