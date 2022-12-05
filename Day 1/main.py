with open("input.txt") as input:
    cals = []
    a = 0

    for i, line in enumerate(input):
        if line.strip():
            a += int(line.strip())
        else:
            cals.append(a)
            a = 0

    part1 = sorted(cals,reverse=True)[0]
    part2 = sum(sorted(cals,reverse=True)[:3])

    print("-----------")
    print("Part 1: " + str(part1))
    print("Part 2: " + str(part2))
    print("-----------")