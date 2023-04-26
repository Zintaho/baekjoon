let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

class Router {
    constructor(maxSize) {
        this.maxSize = parseInt(maxSize);
        this.buffer = new Array(this.maxSize).fill(0);
        this.top = 0;
        this.size = 0;
    }

    push(a) {
        if (this.size === this.maxSize) return;
        let idx = (this.top + this.size++) % this.maxSize;

        this.buffer[idx] = a;
    }

    pop() {
        if (this.size === 0) return;

        this.buffer[this.top++] = 0;
        this.top %= this.maxSize;

        this.size--;
    }

    getBufferString() {
        if (this.size === 0) return 'empty';

        let output = new Array(this.size);
        for (let i = 0; i < this.size; ++i) {
            let k = (this.top + i)%this.maxSize;
            output[i] = this.buffer[k];
        }
        return output.join(' ');
    }
}

const router = new Router(+N);
for (const packet of input) {
    if (packet === '-1') break;
    else if (packet === '0') {
        router.pop();
    } else {
        router.push(packet);
    }
}
console.log(router.getBufferString());
