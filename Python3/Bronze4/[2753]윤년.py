y = int(input())
r = ((not y % 4 and y % 100) or (not y % 400)) and 1 or 0
print(r)