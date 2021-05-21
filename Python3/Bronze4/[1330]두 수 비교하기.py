a, b = map(int, input().split(' '))
r = a > b and '>' or (a < b and '<' or '==')
print(r)