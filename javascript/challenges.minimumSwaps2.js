function minimumSwaps(arr) {
  var comparefn = (a, b) => a - b;
  var sorted = arr.slice().sort(comparefn);
  var counter = 0;
  var len = arr.length;

  var pos = {};
  // record value positions, for later usage
  for (var i = 0; i < arr.length; i ++) {
    pos[arr[i]] = i;
  }

  var visited = [];

  for (var i = 0; i < len; i ++) {
    if (visited[i] || arr[i] == sorted[i]) continue;
    var j = i;
    var cycleSize = 0;
    while(!visited[j]) {
      visited[j] = true;
      j = pos[sorted[pos[arr[j]]]];
      cycleSize ++;
    }
    counter += cycleSize - 1;
  }

  return counter;

}

exports.minimumSwaps = minimumSwaps;
