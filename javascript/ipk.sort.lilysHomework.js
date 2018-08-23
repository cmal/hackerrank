function lilysHomework(arr) {
  var swaps = 0;
  var minCompareFn = (a, b) => a - b;
  var maxCompareFn = (a, b) => b - a;
  var sorted = arr.slice().sort(minCompareFn);
  var counterMin = 0;
  var counterMax = 0;
  var tMin = [];
  var tMax = [];
  for (var i = 0; i < arr.length; i ++) {
    if (sorted[i] != arr[i]) {
      counterMin ++;
      tMin[i] = true;
    }
    if (sorted[arr.length - 1 - i] != arr[i]) {
      counterMax ++;
      tMax[i] = true;
    }
  }
  var comparefn = counterMin < counterMax ? minCompareFn : maxCompareFn;
  var t = counterMin < counterMax ? tMin : tMax;
  selectionSort(arr.filter(function(item, index) {
    return t[index];
  }));
  return swaps;

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

exports.lilysHomework = lilysHomework;
