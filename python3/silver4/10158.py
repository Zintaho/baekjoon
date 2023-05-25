import sys

wh, pq, t = sys.stdin.read().strip().split('\n')

w, h = map(int, wh.split())
p, q = map(int, pq.split())
t = int(t)

p += t
q += t

p %= (w*2)
q %= (h*2)
if p > w:
    p -= (p - w) * 2
if q > h:
    q -= (q - h) * 2

print(p, q)