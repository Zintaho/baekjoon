let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
/*
1 : 그냥 가져가면 승리
2 : 1개 가져가야 하며 무조건 패배 루트
3 : 그냥 가져가면 승리
4 : 그냥 가져가면 승리
5 : 3개 가져가면 승리 루트
6 : 4개 가져가면 승리 루트

7 : 패배 루트
8 : 1개 가져가면 승리 루트
9 : 패배 루트
10 : 1개 가져가면 승리 루트
11 : 4개 가져가면 승리 루트
12 : 3개 가져가면 승리 루트
13 : 4개 가져가면 승리 루트
이후 반복
*/
let answers = ['SK', 'CY', 'SK', 'SK', 'SK', 'SK', 
'CY', 'SK', 'CY', 'SK', 'SK', 'SK', 'SK'];
const answer = N > 13? answers[N%7 + 6]: answers[N-1];
console.log(answer);