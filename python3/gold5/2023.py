import sys
from itertools import product

N = int(sys.stdin.readline().strip())

def is_prime(a):
    if a <= 1:
        return False

    for i in range(2, int(a**0.5) + 1):
        if a % i == 0:
            return False
        
    return True

def perm():
    head = [2,3,5,7]
    body = product([1,3,5,7,9], repeat=N-1)
    full = map(lambda x: int(str(x[0])+''.join(map(str, x[1]))), product(head, body))
    yield from full

output = []
for n in perm():
    is_perfect = True
    for i in range(1, N+1):
        a = int(str(n)[:i])
        
        if not is_prime(a):
            is_perfect = False
            break
    if is_perfect:
        output.append(n)

print('\n'.join(map(str, output)))