let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);

class Heap {
    constructor() {
        this.data = [];
    }

    pop() {
        if (this.data.length === 0) return 0;
        let [a,b] = [this.data[0], this.data.pop()];
        if (this.data.length > 0) this.data[0] = b;

        let i = 0;
        let [l, iL, r, iR] = [...this.left(i), ...this.right(i)];
        while ((l !== undefined || r !== undefined) && (l > b || r > b)) {
            if ((l > b && r <= b) || (l > b && l >= r) || (l > b && r === undefined)) {
                [this.data[i], this.data[iL]] = [this.data[iL], this.data[i]];
                i = iL;
                [l, iL, r, iR] = [...this.left(i), ...this.right(i)];
            } else if ((r > b && l <= b) || (r > b && r >= l)) {
                [this.data[i], this.data[iR]] = [this.data[iR], this.data[i]];
                i = iR;
                [l, iL, r, iR] = [...this.left(i), ...this.right(i)];
            }
        }

        return a;
    }

    push(a) {
        this.data.push(a);
        let i = this.data.length - 1;
        let [b, j] = this.parent(i);
        while (b !== undefined && b < a) {
            [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
            i = j;
            [b, j] = this.parent(i);
        }
    }

    parent(i) {
        i = Math.floor((i-1)/2);
        if (i >= 0) return [this.data[i], i];
        else return [undefined, undefined];
    }

    left(i) {
        i = i*2 + 1;
        if (i < this.data.length) return [this.data[i], i];
        else return [undefined, undefined];
    }

    right(i) {
        i = i*2 + 2;
        if (i < this.data.length) return [this.data[i], i];
        else return [undefined, undefined];
    }
}

const heap = new Heap();
const output = [];
for (let n = 0; n < N; ++n) {
    let a = input[n];
    switch(a) {
        case 0:
            output.push(heap.pop());
            break;
        default:
            heap.push(a);
    }
}
console.log(output.join('\n'));