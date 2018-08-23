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


function selectionSort(arr) {
  for (var i = 0; i < arr.length; i ++) {
    var minIndex = i;
    for (var j = i; j < arr.length; j ++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      swap(arr, minIndex, i);
    }
  }
  return arr;
}

exports.selectionSort = selectionSort;


// V8's Array.prototype.sort implementation
// quickSort + insertionSort
var comparefn = (a, b) => a - b;

function InsertionSort(a, from, to) {
  for (var i = from + 1; i < to; i++) {
    var element = a[i];
    for (var j = i - 1; j >= from; j--) {
      var tmp = a[j];
      var order = comparefn(tmp, element);
      if (order > 0) {
        a[j + 1] = tmp;
      } else {
        break;
      }
    }
    a[j + 1] = element;
  }
}

var QuickSort = function QuickSort(a, from, to) {
  var third_index = 0;
  while (true) {
    // Insertion sort is faster for short arrays.
    if (to - from <= 10) {
      InsertionSort(a, from, to);
      return;
    }
    if (to - from > 1000) {
      third_index = GetThirdIndex(a, from, to);
    } else {
      third_index = from + ((to - from) >> 1);
    }
    // Find a pivot as the median of first, last and middle element.
    var v0 = a[from];
    var v1 = a[to - 1];
    var v2 = a[third_index];
    var c01 = comparefn(v0, v1);
    if (c01 > 0) {
      // v1 < v0, so swap them.
      var tmp = v0;
      v0 = v1;
      v1 = tmp;
    } // v0 <= v1.
    var c02 = comparefn(v0, v2);
    if (c02 >= 0) {
      // v2 <= v0 <= v1.
      var tmp = v0;
      v0 = v2;
      v2 = v1;
      v1 = tmp;
    } else {
      // v0 <= v1 && v0 < v2
      var c12 = comparefn(v1, v2);
      if (c12 > 0) {
        // v0 <= v2 < v1
        var tmp = v1;
        v1 = v2;
        v2 = tmp;
      }
    }
    // v0 <= v1 <= v2
    a[from] = v0;
    a[to - 1] = v2;
    var pivot = v1;
    var low_end = from + 1;   // Upper bound of elements lower than pivot.
    var high_start = to - 1;  // Lower bound of elements greater than pivot.
    a[third_index] = a[low_end];
    a[low_end] = pivot;

    // From low_end to i are elements equal to pivot.
    // From i to high_start are elements that haven't been compared yet.
    partition: for (var i = low_end + 1; i < high_start; i++) {
      var element = a[i];
      var order = comparefn(element, pivot);
      if (order < 0) {
        a[i] = a[low_end];
        a[low_end] = element;
        low_end++;
      } else if (order > 0) {
        do {
          high_start--;
          if (high_start == i) break partition;
          var top_elem = a[high_start];
          order = comparefn(top_elem, pivot);
        } while (order > 0);
        a[i] = a[high_start];
        a[high_start] = element;
        if (order < 0) {
          element = a[i];
          a[i] = a[low_end];
          a[low_end] = element;
          low_end++;
        }
      }
    }
    if (to - high_start < low_end - from) {
      QuickSort(a, high_start, to);
      to = low_end;
    } else {
      QuickSort(a, from, low_end);
      from = high_start;
    }
  }
}

exports.QuickSort = QuickSort;
