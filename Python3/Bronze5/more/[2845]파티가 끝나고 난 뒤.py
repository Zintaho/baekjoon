a, b = map(int, input().split(' '))
arr = [str(c - a*b) for c in map(int, input().split(' '))]
print(' '.join(arr))