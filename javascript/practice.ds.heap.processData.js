function parent(i) {
  if (!i) return -1;
  return parseInt((i - 1) / 2);
}

function left(i) {
  return i * 2 + 1;
}

function right(i) {
  return 2 * (i + 1);
}

function compare(a, b) {
  // for minheap, a < b
  // for maxheap, a > b
  return a < b;
}

function swap(arr, i, j) {
  var tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function heapify(arr, len, i) {
  var l = left(i);
  var r = right(i);
  var pole = (l < len && compare(arr[l], arr[i])) ? l : i;
  pole = (r < len && compare(arr[r], arr[pole])) ? r : pole;
  if (i != pole) {
    swap(arr, i, pole);
    heapify(arr, len, pole);
  }
}

function buildHeap(arr) {
  var len = arr.length;
  var i = parent(len - 1);
  while(i >= 0) {
    heapify(arr, len, i);
    i --;
  }
}

function heapSwimKey(arr, k, v) {
  arr[k] = v;
  var i = k;
  while(i > 0 && compare(arr[i], arr[parent(i)])) {
    swap(arr, i, parent(i));
    i = parent(i);
  }
}

function heapInsert(arr, x) {
  heapSwimKey(arr, arr.length, x);
}

function heapTop(arr) {
  return arr[0];
}

function heapExtractTop(arr) {
  if (arr.length == 1) {
    return arr.pop();
  }
  var top = arr[0];
  arr[0] = arr.pop();
  heapify(arr, arr.length, 0)
  return top;
}

function processData(input) {
  //Enter your code here
  var inputs = input.split('\n');
  var n = parseInt(inputs[0]);
  var arr = [];
  var result = [];
  for (var i = 0; i < n; i ++) {
    var ops = inputs[i+1].split(' ');
    switch(ops[0]) {
    case '1':
      heapInsert(arr, parseInt(ops[1]));
      break;
    case '2':
      var val = parseInt(ops[1]);
      var index = arr.indexOf(val);
      heapSwimKey(arr, index, -Infinity);
      heapExtractTop(arr);
      break;
    case '3':
      result.push(heapTop(arr));
      break;
    }
  }
  return result;
} 

exports.processData = processData;
exports.heapify = heapify;
