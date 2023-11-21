let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let N = undefined;
let arr = undefined
rl.on('line', (line) => {
    if (N === undefined) N = +line;
    else if (arr === undefined) {
        arr = line.split(' ').map(Number);
        arr.sort((a,b) => b-a);
    } else {
        line.split(' ').forEach(x => {
            x = Number(x);
            arr.push(x);
        });
        arr.sort((a,b) => b-a);
        for (let n = 0; n < N; ++n) {
            arr.pop();
        }
    }
})
  .on('close', () => {
    console.log(arr[N-1]);
    process.exit();
});


// [메모리 초과]
// let map = {};
// let heap = [];
// input[N-1].split(' ').forEach((x, i)=>{
//     x = +x;
//     map[x] = [i, N-1];
//     insert(x);
// });
// input[N-1] = '';

// let result = 0;
// for (let n = 0; n < N; ++n) {
//     result = pop();
// }
// console.log(result);

// function insert(x) {
//     heap.push(x);
//     let i = heap.length - 1;
//     let parent = ~~(i/2);
//     while (i !== parent) {
//         let y = heap[parent];
//         if (x > y) {
//             heap[parent] = x;
//             heap[i] = y;
//         } else {
//             break;
//         }
//         i = parent;
//         parent = ~~(i/2);
//     }
// }

// function pop() {
//     let top = heap[0];
//     let head = map[top];
//     head[1]--;
//     if (head[1] >= 0) {
//         let a = +input[head[1]].split(' ')[head[0]];
//         map[a] = head;
//         let b = heap.pop();
//         let i = 0;
//         heap[i] = b;
//         let l = i*2 + 1;
//         let r = i*2 + 2;
//         while (i < heap.length) {
//             if (heap[l] > heap[r]) {
//                 if (heap[l] > heap[i]) {
//                     let temp = heap[i];
//                     heap[i] = heap[l];
//                     heap[l] = temp;
//                     i = l;
//                 } else break;
//             } else {
//                 if (heap[r] > heap[i]) {
//                     let temp = heap[i];
//                     heap[i] = heap[r];
//                     heap[r] = temp;
//                     i = r;
//                 } else break;
//             }
//             l = i*2 + 1;
//             r = i*2 + 2;
//         }
        
//         insert(a);
//     } 
//     return top;
// }