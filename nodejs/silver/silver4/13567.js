let [Mn, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [M, n] = Mn.split(' ').map(x=>+x);

const DIR = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1]
];

class Robot {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.dir = 0;
    }

    call(cmd, d) {
        switch (cmd) {
            case 'MOVE':
                this.move(d);
                break;
            case 'TURN':
                this.turn(d);
                break;
        }
    }

    move(d) {
        d = parseInt(d);
        
        this.x += d * DIR[this.dir][0];
        this.y += d * DIR[this.dir][1];
    }

    turn(dir) {
        dir = parseInt(dir);
        this.dir += (dir===1?1:-1);
        if (this.dir < 0) this.dir += 4;
        else if (this.dir > 3) this.dir -= 4;
    }

    getResult() {
        if (this.x > M || this.y > M || this.x < 0 || this.y < 0) return '-1';
        else return `${this.x} ${this.y}`;
    }
}
const robot = new Robot();
for (let i = 0; i < n; ++i) {
    let [cmd, d] = input[i].split(' ');
    robot.call(cmd, d);
    const result = robot.getResult();
    if (result === '-1') {
        console.log(result);
        break;
    } else {
        if (i === n-1) {
            console.log(result);
        }
    }
}