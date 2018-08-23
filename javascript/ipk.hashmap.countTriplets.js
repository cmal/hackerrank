function countBefore(pre, ppre, limit) {
  if (!pre || !ppre) return 0;
  var count = 0;
  for (var i = 0; i < pre.length; i ++) {
    var counted = false;
    for (var j = 0; j < ppre.length; j ++) {
      if (pre[i] <= ppre[j]) {
        count += j;
        counted = true;
        break;
      }
    }
    if (!counted) {
      count += ppre.length; 
    }
  }
  return count;
}

function countTriplets(arr, r) {
  var occurs = {};
  var count = 0;
  for (var i = 0; i < arr.length; i ++) {
    var k = arr[i];
    if (k % (r * r) === 0) {
      var kr = k / r;
      var krr = kr / r;
      var pre = occurs[kr];
      var ppre = occurs[krr];
      count += countBefore(pre, ppre);
    }
    var val = occurs[k];
    if (val) {
      occurs[k].push(i);
    } else {
      occurs[k] = [i];
    }
  }
  return count;
}

exports.countTriplets = countTriplets;
