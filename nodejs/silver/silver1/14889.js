let [N, ...scores] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
scores.forEach((x, i) => scores[i] = x.split(' ').map(Number));
for (let i = 0; i < N-1; ++i) {
    for (let j = i+1; j < N; ++j) {
        scores[i][j] += scores[j][i];
        scores[j][i] = 0;
    }
}

let min = 2000;
let sequences = [];
recur();
sequences = sequences.slice(0, sequences.length / 2);
for (let seq of sequences) {
    if (min === 0) break;

    let set = new Set(Array.from({length : N}, (_, i) => i));
    for (let x of seq) set.delete(x);
    
    let others = [...set];
    let sumA = 0;
    let sumB = 0;
    for (let i = 0; i < N/2 - 1; ++i) {
        for (let j = i; j < N/2; ++j) {
            let [I, J] = [seq[i], seq[j]];
            let [II, JJ] = [others[i], others[j]];
            sumA += scores[I][J];
            sumB += scores[II][JJ];
        }
    }

    min = Math.min(min, Math.abs(sumA - sumB));
}
console.log(min);

function recur(seq = []) {
    if (seq.length === N/2) {
        sequences.push(seq);
        return;
    }

    for (let i = 0; i < N; ++i) {
        let newSEQ = [...seq];
        if (seq.length === 0) {
            newSEQ.push(i);
        } else {
            let a = newSEQ[newSEQ.length - 1];
            if (a < i) {
                newSEQ.push(i);
            } else continue;
        }
        recur([...newSEQ]);
    }
}