let [NM, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let K = 51;
NM = NM.split(' ');
NM.forEach((x, i) => {
    NM[i] = +x;
    K = Math.min(K, +x);
});

let output = 1;

const getOutput = () => {

    while (K >= 1) {
        let [X,Y] = [NM[1] - K, NM[0] -K];

        for (let y = 0; y < Y; ++y) {
            for (let x = 0; x < X; ++x) {
                let [a,b,c,d] = [
                    input[y][x],
                    input[y][x+K],
                    input[y+K][x+K],
                    input[y+K][x]
                ];
                if (a===b && b===c&& c===d) {
                    output = (K+1)*(K+1);
                    return;
                }
            }
        }
        --K;
    }
}
getOutput();
console.log(output);