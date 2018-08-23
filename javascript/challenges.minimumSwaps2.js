function minimumSwaps(arr) {
  var swaps = 0;
  var comparefn = (a, b) => a - b;
  selectionSort(arr);
  return swaps
  // return leastSwapsQuickSort(arr);
  
  function selectionSort(arr) {
    for (var i = 0; i < arr.length; i ++) {
      var minIndex = i;
      for (var j = i; j < arr.length; j ++) {
        if (comparefn(arr[j], arr[minIndex]) < 0) {
          minIndex = j;
        }
      }
      if (minIndex != i) {
        selectionSwap(arr, minIndex, i);
      }
    }
    return arr;
  }

  function selectionSwap(arr, i, j) {
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    swaps ++;
  }

}

exports.minimumSwaps = minimumSwaps;


function leastSwapsQuickSort(arr) {
  // this is not right
  var swaps = 0;
  quickSortRecur(arr, 0, arr.length - 1);

  function swap(arr, i, j) {
    if (i == j || arr[i] == arr[j]) return;
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
    swaps ++;
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
  return swaps;
}
