import sys

L = 0
N = 0
min_values = [0, 0, 0]
max_values = [0, 0, 0]

for line in sys.stdin:
    if L == 0:
        N = int(line)
    else:
        a, b, c = map(int, line.split())

        a += min(min_values[0], min_values[1])
        b += min(min_values[0], min_values[1], min_values[2])
        c += min(min_values[1], min_values[2])
        min_values[0] = a
        min_values[1] = b
        min_values[2] = c

        a, b, c = map(int, line.split())
        a += max(max_values[0], max_values[1])
        b += max(max_values[0], max_values[1], max_values[2])
        c += max(max_values[1], max_values[2])
        max_values[0] = a
        max_values[1] = b
        max_values[2] = c

    L += 1

print(max(max_values), min(min_values))
