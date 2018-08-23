def checkMagazine(magazine, note):
    m = dict()
    n = dict()
    for item in magazine:
        if item in m:
            m[item] = m[item] + 1
        else:
            m[item] = 1
    for item in note:
        if item in n:
            n[item] = n[item] + 1
        else:
            n[item] = 1
    for item in n:
        if item not in m:
            return "No"
        if n[item] > m[item]:
            return "No"
    return "Yes"
