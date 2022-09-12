'''
Node.js 메모리 초과
'''
import sys

data = list(map(int, map(lambda x:x.rstrip(), sys.stdin.readlines())))
N = data[0]
survey = sum(data[1:N+1])
print(f'Junhee is {"not "if N > survey*2 else ""}cute!')