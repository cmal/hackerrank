import collections

# Complete the countTriplets function below.
def countTriplets(arr, r):
  res = 0
  first = collections.defaultdict(int)
  second = collections.defaultdict(int)

  for a in arr:
      if a % r == 0:
          a_r = a // r
          if a_r in second:
              res += second[a_r]
          if a_r in first:
              second[a] += first[a_r]
      first[a] += 1

  return res
