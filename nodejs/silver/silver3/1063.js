let [KSN, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [K, S, N] = KSN.split(' ');
N = +N;
class Pos {
    constructor(str, stone) {
        let [X, Y] = str.split('');
        let A = 'A'.charCodeAt(0);

        this.y = Number(Y-1);
        this.x = X.charCodeAt(0) - A;
        this.stone = stone;
    }

    move(cmd) {
        let [dx, dy] = [0, 0];
        for (let c of cmd) {
            switch(c) {
                case 'R':
                    dx++;
                    break;
                case 'L':
                    dx--;
                    break;
                case 'T':
                    dy++;
                    break;
                case 'B':
                    dy--;
                    break;
            }
        }

        if ((this.x + dx) < 0) return false;
        if ((this.x + dx) > 7) return false;
        if ((this.y + dy) < 0) return false;
        if ((this.y + dy) > 7) return false;
        if (stone) {
            if ((this.x + dx) === stone.x && (this.y + dy) === stone.y) {
                const moveResult = stone.move(cmd);
                if (!moveResult) return false;
            }
        }
        this.x+=dx;
        this.y+=dy;
        return true;
    }

    print() {
        let A = 'A'.charCodeAt(0);
        let X = String.fromCharCode(A+this.x);
        let Y = `${this.y+1}`;
        console.log(X+Y);
    }
}

let stone = new Pos(S, null);
let king = new Pos(K, stone);

for (let n = 0; n < N; ++n) {
    let cmd = input[n];
    king.move(cmd);
}

king.print();
stone.print();