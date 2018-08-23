function insertionSort(arr) {
  for (var i = 1; i < arr.length; i ++) {
    var j = i - 1;
    var tmp = arr[i];
    while (tmp < arr[j] && j >= 0) {
      arr[j + 1] = arr[j];
      j --;
    }
    arr[j + 1] = tmp;
  }
  return arr;
}

function quickSort(arr) {
  quickSortRecur(arr, 0, arr.length - 1);
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function sortPartition(arr, p, r) {
  // swap every small element to first part
  var pivot = arr[r];
  var i = p - 1;
  for (var j = p; j < r; j ++) {
    if (arr[j] <= pivot) {
      i ++;
      swap(arr, i, j);
    }
  }
  i ++;
  swap(arr, i, r);
  return i;
}

function quickSortRecur(arr, p, r) {
  if (p < r) {
    var q = sortPartition(arr, p, r);
    quickSortRecur(arr, p, q - 1);
    quickSortRecur(arr, q + 1, r);
  }
}

function take(arr, n, beg) {
  var newArr = [];
  for (var i = beg; i < beg + n && i < arr.length; i ++) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function partition(n, step, arr) {
  return arr.reduce(function(prev, curr, index, arr) {
    // console.log(prev)
    if (index % step) return prev;
    if (index + n > arr.length) return prev;
    prev.push(take(arr, n, index));
    return prev;
  }, []);
}

function groupBy(f, arr) {
  return arr.reduce(function(prev, curr) {
    var k = f(curr);
    var v = prev[k];
    var val = v ? v : [];
    val.push(curr);
    prev[k] = val;
    return prev;
  }, {});
}


exports.insertionSort = insertionSort;
exports.quickSort = quickSort;
exports.take = take;
exports.partition = partition;
exports.groupBy = groupBy;
