a = int(input())//10
b = {10 : 'A', 9 : 'A', 8 : 'B', 7 : 'C', 6 : 'D'}
r = b.get(a, 'F')
print(r)