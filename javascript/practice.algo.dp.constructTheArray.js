function countArray(n, k, x) {
  var mod = 10**9 + 7;
  return countArrayRecur(n, k, 1, x) % mod;
}

function countArrayRecur(n, k, start, x) {
  if (n == 3) {
    if (start == x) return k - 1;
    return k - 2;
  }
  var sum = 0;
  for (var i = 1; i <= k; i ++) {
    if (i == start) continue;
    sum += countArrayRecur(n - 1, k, i, x);
  }
  return sum;
}

exports.countArray = countArray;
