def twoStrings(s1, s2):
    for i in range(s1.length):
        if s2.find(s1[i]) != -1:
            return 'YES'
    return 'NO'
