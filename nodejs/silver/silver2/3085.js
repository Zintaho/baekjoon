let [N, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
board.forEach((x, i) => board[i] = x.split(''));

let max = 1;
// row
for (let y = 0; y < N; ++y) {
    let now = '';
    let len = 0;
    let start = 0;
    for (let x = 0; x < N; ++x) {

        const c = board[y][x];
        if (x === 0) now = c;

        if (now === c) {
            len++;
        } else {

            if (
                (y>=1 && board[y-1][start-1] === now) 
            ||  (y+1 < N && board[y+1][start-1] === now) 
            ) {
                let k = 1;
                for (let xx = start - 2; xx >= 0; --xx) {
                    if (board[y][xx] === now) k++;
                    else break;
                }
                max = Math.max(len+k, max);   
            } else if (
                (y>=1 && board[y-1][start+len] === now) 
            ||  (y+1 < N && board[y+1][start+len] === now) 
            )   {
                let k = 1;
                for (let xx = start + len + 1; xx < N; ++xx) {
                    if (board[y][xx] === now) k++;
                    else break;
                }
                max = Math.max(len+k, max);   
            } else if ( 
                start+len+1 < N && board[y][start+len+1] === now
            ) { 
                max = Math.max(len+1, max);
            } else max = Math.max(len, max);

            now = c;
            len = 1;
            start = x;
        }

        if (x === N-1) {
            if (
                (y>=1 && board[y-1][start-1] === now) 
            ||  (y+1 < N && board[y+1][start-1] === now) 
            ) {
                let k = 1;
                for (let xx = start - 2; xx >= 0; --xx) {
                    if (board[y][xx] === now) k++;
                    else break;
                }
                max = Math.max(len+k, max);   
            } else if (
                (y>=1 && board[y-1][start+len] === now) 
            ||  (y+1 < N && board[y+1][start+len] === now) 
            )   {
                let k = 1;
                for (let xx = start + len + 1; xx < N; ++xx) {
                    if (board[y][xx] === now) k++;
                    else break;
                }
                max = Math.max(len+k, max);   
            } else if ( 
                start+len+1 < N && board[y][start+len+1] === now
            ) { 
                max = Math.max(len+1, max);
            } else max = Math.max(len, max);
        }
    }
}
// col
for (let x = 0; x < N; ++x) {
    let now = '';
    let len = 0;
    let start = 0;
    for (let y = 0; y < N; ++y) {

        const c = board[y][x];
        if (y === 0) now = c;

        if (now === c) {
            len++;
        } else {

            if (
                (start>=1 && board[start-1][x-1] === now) 
            ||  (start>=1 && board[start-1][x+1] === now) 
            ) {
                let k = 1;
                for (let yy = start - 2; yy >= 0; --yy) {
                    if (board[yy][x] === now) k++;
                    else break;
                }
                max = Math.max(len+k, max);       
            }
            else if(
                (start+len < N && board[start+len][x-1] === now) 
            ||  (start+len < N && board[start+len][x+1] === now) 
            ) {
                let k = 1;
                for (let yy = start + len + 1; yy < N; ++yy) {
                    if (board[yy][x] === now) k++;
                    else break;
                }
                max = Math.max(len+k, max);    
            } else if ( 
                start+len+1 < N && board[start+len+1][x] === now
            ) { 
                max = Math.max(len+1, max);
            } else max = Math.max(len, max);

            now = c;
            len = 1;
            start = y;
        }

        if (y === N-1) {

            if (
                (start>=1 && board[start-1][x-1] === now) 
            ||  (start>=1 && board[start-1][x+1] === now) 
            ) {
                let k = 1;
                for (let yy = start - 2; yy >= 0; --yy) {
                    if (board[yy][x] === now) k++;
                    else break;
                }
                max = Math.max(len+k, max);       
            }
            else if(
                (start+len < N && board[start+len][x-1] === now) 
            ||  (start+len < N && board[start+len][x+1] === now) 
            ) {
                let k = 1;
                for (let yy = start + len + 1; yy < N; ++yy) {
                    if (board[yy][x] === now) k++;
                    else break;
                }
                max = Math.max(len+k, max);    
            } else if ( 
                start+len+1 < N && board[start+len+1][x] === now
            ) { 
                max = Math.max(len+1, max);
            }else max = Math.max(len, max);

        }
    }
}

console.log(max);