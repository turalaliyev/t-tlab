"""Generate a topographic contour-line SVG (pure Python, no numpy).

Usage: python scripts/generate-contours.py src/assets/contours.svg [seed]
A smooth height field (a few soft "hills" + low-frequency waves) is sampled on a grid,
contours are extracted with marching squares and chained into polylines.
"""
import math
import random
import sys

W, H = 1600, 1000          # SVG canvas
NX, NY = 200, 125          # sampling grid (8px cells)
LEVELS = 40                # number of contour lines
out = sys.argv[1]
rnd = random.Random(int(sys.argv[2]) if len(sys.argv) > 2 else 22)

# Soft hills: (cx, cy, radius, height) in canvas units
hills = [
    (1180, 260, 520, 1.00),
    (1360, 120, 180, 0.30),
    (360, 760, 460, 0.70),
    (180, 180, 300, 0.35),
    (820, 980, 380, -0.45),
    (700, 420, 260, -0.25),
    (1500, 860, 300, 0.35),
]
waves = [(rnd.uniform(0, 6.28), rnd.uniform(0.6, 1.4), rnd.uniform(0.6, 1.4)) for _ in range(3)]


def field(x, y):
    v = 0.0
    for cx, cy, r, h in hills:
        d2 = ((x - cx) ** 2 + (y - cy) ** 2) / (r * r)
        v += h * math.exp(-d2)
    for ph, fx, fy in waves:
        v += 0.09 * math.sin(fx * x / 210 + ph) * math.cos(fy * y / 170 - ph)
    return v


xs = [i * W / (NX - 1) for i in range(NX)]
ys = [j * H / (NY - 1) for j in range(NY)]
grid = [[field(x, y) for x in xs] for y in ys]
lo = min(min(r) for r in grid)
hi = max(max(r) for r in grid)
levels = [lo + (hi - lo) * (k + 0.5) / LEVELS for k in range(LEVELS)]


def interp(p1, p2, v1, v2, t):
    a = (t - v1) / (v2 - v1) if v2 != v1 else 0.5
    return (p1[0] + a * (p2[0] - p1[0]), p1[1] + a * (p2[1] - p1[1]))


def segments(t):
    segs = []
    for j in range(NY - 1):
        for i in range(NX - 1):
            p = [(xs[i], ys[j]), (xs[i + 1], ys[j]), (xs[i + 1], ys[j + 1]), (xs[i], ys[j + 1])]
            v = [grid[j][i], grid[j][i + 1], grid[j + 1][i + 1], grid[j + 1][i]]
            idx = sum(1 << k for k in range(4) if v[k] > t)
            if idx in (0, 15):
                continue
            e = {
                0: lambda: interp(p[0], p[1], v[0], v[1], t),
                1: lambda: interp(p[1], p[2], v[1], v[2], t),
                2: lambda: interp(p[2], p[3], v[2], v[3], t),
                3: lambda: interp(p[3], p[0], v[3], v[0], t),
            }
            table = {
                1: [(3, 0)], 2: [(0, 1)], 3: [(3, 1)], 4: [(1, 2)], 5: [(3, 0), (1, 2)],
                6: [(0, 2)], 7: [(3, 2)], 8: [(2, 3)], 9: [(0, 2)], 10: [(0, 1), (2, 3)],
                11: [(1, 2)], 12: [(1, 3)], 13: [(0, 1)], 14: [(3, 0)],
            }
            for a, b in table[idx]:
                segs.append((e[a](), e[b]()))
    return segs


def chain(segs):
    key = lambda pt: (round(pt[0], 2), round(pt[1], 2))
    adj = {}
    for n, (a, b) in enumerate(segs):
        adj.setdefault(key(a), []).append((n, a, b))
        adj.setdefault(key(b), []).append((n, b, a))
    used = set()
    lines = []
    for n, (a, b) in enumerate(segs):
        if n in used:
            continue
        used.add(n)
        line = [a, b]
        for direction in (1, 0):  # extend forward then backward
            while True:
                end = line[-1] if direction else line[0]
                nxt = next(((m, q) for m, _, q in adj.get(key(end), []) if m not in used), None)
                if not nxt:
                    break
                used.add(nxt[0])
                if direction:
                    line.append(nxt[1])
                else:
                    line.insert(0, nxt[1])
        if len(line) > 6:
            lines.append(line)
    return lines


paths = []
for k, t in enumerate(levels):
    for line in chain(segments(t)):
        pts = line[::2] + ([line[-1]] if len(line) % 2 == 0 else [])  # light simplification
        d = 'M' + ' L'.join(f'{x:.0f} {y:.0f}' for x, y in pts)
        # every 5th line slightly stronger, like index contours on a map
        paths.append((d, k % 5 == 0))

svg = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" preserveAspectRatio="xMidYMid slice" fill="none">']
svg.append('<g stroke="#ffffff" stroke-opacity="0.085" stroke-width="1">')
svg += [f'<path d="{d}"/>' for d, strong in paths if not strong]
svg.append('</g><g stroke="#ffffff" stroke-opacity="0.15" stroke-width="1.2">')
svg += [f'<path d="{d}"/>' for d, strong in paths if strong]
svg.append('</g></svg>')
open(out, 'w', encoding='utf-8').write('\n'.join(svg))
print(f'{len(paths)} paths, {sum(len(s) for s in svg) / 1024:.1f} KB -> {out}')
