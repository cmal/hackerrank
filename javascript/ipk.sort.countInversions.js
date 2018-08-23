function countInversions(arr) {
  return countingInversionsRecur(arr, 0, arr.length - 1);
}

function countingInversionsRecur(arr, p, r) {
  if (p < r) {
    var q = parseInt((p + r) / 2);
    var m = countingInversionsRecur(arr, p, q);
    var n = countingInversionsRecur(arr, q + 1, r);
    return m + n + merge(arr, p, q, r);
  }
  return 0;
}

function merge(arr, p, q, r) {
  var i, j;
  var cnt = 0;
  var a = [];
  var b = [];
  for (i = p; i <= q; i ++) {
    a.push(arr[i]);
  }
  for (j = q + 1; j <= r; j ++) {
    b.push(arr[j]);
  }
  i = 0;
  j = 0;
  for (var k = p; k <= r; k ++) {
    if (i + p > q) {
      while (k <= r) {
        arr[k] = b[j];
        j ++;
        k ++;
      }
      break;
    } else if (j + q + 1 > r) {
      while (k <= r) {
        arr[k] = a[i];
        i ++;
        k ++;
      }
      break;
    }
    if (a[i] <= b[j]) {
      arr[k] = a[i];
      i ++;
    } else {
      arr[k] = b[j];
      j ++;
      cnt += q - i - p + 1;
    }
  }
  return cnt;
}


exports.countInversions = countInversions;
