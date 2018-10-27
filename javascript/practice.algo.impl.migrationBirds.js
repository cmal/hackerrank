function migrationBirds(arr) {
  var maxCnt = 0;
  var minMaxKey = arr.length;
  var freqs = new Array(minMaxKey).fill(0);
  for (var i = 0; i < arr.length ; i ++) {
    var n = ++freqs[arr[i]];
    if (n == maxCnt) {
      minMaxKey = Math.min(minMaxKey, arr[i]);
    } else if (n > maxCnt) {
      maxCnt = n;
      minMaxKey = arr[i];
    }
  }
  return minMaxKey;
}

exports.migrationBirds = migrationBirds;
