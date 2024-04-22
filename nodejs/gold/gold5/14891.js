let [a,b,c,d,N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

a = a.split('').map(Number);
b = b.split('').map(Number);
c = c.split('').map(Number);
d = d.split('').map(Number);

class CogWheel {
    constructor(cog) {
        this.head = 0;
        this.cog = cog;
    }

    headNum() {return this.cog[this.head];}
    left() {return (this.head - 2 + 8) % 8 ;}
    right() {return (this.head + 2 + 8) % 8 ;}
    rotate(dir) {
        dir *= -1;
        this.head = (this.head + dir + 8) % 8;
    }
    L() {
        return this.cog[this.left()];
    }
    R() {
        return this.cog[this.right()];
    }
    print() {
        let toPrint = this.cog.map((x, i) => {
            x = (x === 1 ? 'S' : 'N');
            if (i === this.left()) {
                return `{{${x}}`;
            } else if (i === this.right()) return `{${x}}}` 
            else if (i === this.head) return `[${x}]`;
            else return `${x}`;
        });
        console.log(toPrint.join(' '))
    }
}

let rawCogs = [a,b,c,d];
let cogs = new Array(4);
for (let i = 0; i < 4; ++i) cogs[i] = new CogWheel(rawCogs[i]);

for (let n = 0; n < N; ++n) {
    let [cogNum, dir] = input[n].split(' ').map(Number);
    cogNum--;

    let rotate = [0, 0, 0, 0];
    rotate[cogNum] = dir;

    let [cogNumL, cogNumR, dirL, dirR] = [cogNum, cogNum, dir*-1, dir*-1];
    // <=
    let left = cogNumL - 1;
    while (left >= 0) {
        if (cogs[left].R() !== cogs[cogNumL].L()) {
            rotate[left] = dirL;
        } else break;

        cogNumL = left;
        left = cogNumL - 1;
        dirL *= -1;
    }
    // =>
    let right = cogNumR + 1;
    while (right < 4) {
        if (cogs[cogNumR].R() !== cogs[right].L()) {
            rotate[right] = dirR;
        } else break;

        cogNumR = right;
        right = cogNumR + 1;
        dirR *= -1;
    }

    for (let i = 0; i < 4; ++i) {
        cogs[i].rotate(rotate[i]);
    }
    
}

let sum = 0;
for (let i = 0; i < 4; ++i) {
    let cog = cogs[i];
    sum += cog.headNum() * 2 ** i;
}

console.log(sum);