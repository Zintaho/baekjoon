let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let cmdMap = {
       ADD: 0,
      ADDC: 1,

       SUB: 2,
      SUBC: 3,

       MOV: 4,
      MOVC: 5,

       AND: 6,
      ANDC: 7,

        OR: 8,
       ORC: 9,

       NOT: 10,

      MULT: 12,
     MULTC: 13,

     LSFTL: 14,
    LSFTLC: 15,

     LSFTR: 16,
    LSFTRC: 17,
    
     ASFTR: 18,
    ASFTRC: 19,

        RL: 20,
       RLC: 21,

        RR: 22,
       RRC: 23
}

let output = new Array(+N);
function fillCode(code, info, K) {
    info = info.toString(2);
    const J = info.length-1;
    for (let j = J; j >= 0; --j) {
        code[K--] = info.charAt(j);
    }
}
input.forEach((x, i) => {
    let [cmd, D, A, BC] = x.split(' ');
    const code = new Array(16).fill(0);

    fillCode(code, cmdMap[cmd], 4);
    fillCode(code, (+D), 8);
    fillCode(code, (+A), 11);
    fillCode(code, (+BC), code[4]==='1'?15:14);

    output[i] = code.join('');
});

console.log(output.join('\n'));