function lilysHomework(arr) {
  var comparefn = (a, b) => a - b;
  var sorted = arr.slice().sort(comparefn);
  var counterMin = 0;
  var counterMax = 0;
  var len = arr.length;

  var pos = {};
  // record value positions, for later usage
  for (var i = 0; i < arr.length; i ++) {
    pos[arr[i]] = i;
  }

  var visitedMin = [];
  var visitedMax = [];

  for (var i = 0; i < len; i ++) {
    if (visitedMin[i] || arr[i] == sorted[i]) continue;
    var j = i;
    var cycleSize = 0;
    while(!visitedMin[j]) {
      visitedMin[j] = true;
      j = pos[sorted[pos[arr[j]]]];
      cycleSize ++;
    }
    counterMin += cycleSize - 1;
  }

  for (var i = 0; i < len; i ++) {
    if (visitedMax[i] || arr[i] == sorted[len - 1 - i]) continue;
    var j = i;
    var cycleSize = 0;
    while(!visitedMax[j]) {
      visitedMax[j] = true;
      j = pos[sorted[len - 1 - pos[arr[j]]]];
      cycleSize ++;
    }
    counterMax += cycleSize - 1;
  }
  return Math.min(counterMin, counterMax);
}

exports.lilysHomework = lilysHomework;
