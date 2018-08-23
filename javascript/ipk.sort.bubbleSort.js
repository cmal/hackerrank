function countSwaps(arr) {
  var swaps = 0;
  bubbleSort(arr, swaps);
  return [swaps, arr[0], arr[arr.length - 1]];

  function swap(arr, i, j) {
    swaps ++;
    var t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }

  function bubbleSort(arr) {
    var oldSwaps = swaps;
    bubble(arr);
    if (swaps != oldSwaps) {
      bubbleSort(arr);
    }
  }

  function bubble(arr) {
    for (var i = 0; i < arr.length - 1; i ++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
  }
}


exports.countSwaps = countSwaps;
