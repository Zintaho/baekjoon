import sys

arr = list()
isN = False
for line in sys.stdin:
    line = line.split()
    if not isN:
        del line[0]
        isN = True
    arr.extend(line)
output = [int(x[::-1]) for x in arr]
output.sort()
print(*output, sep='\n')