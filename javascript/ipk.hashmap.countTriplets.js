// timeout:

// function countBefore(pre, ppre, limit) {
//   if (!pre || !ppre) return 0;
//   var count = 0;
//   for (var i = 0; i < pre.length; i ++) {
//     var counted = false;
//     for (var j = 0; j < ppre.length; j ++) {
//       if (pre[i] <= ppre[j]) {
//         count += j;
//         counted = true;
//         break;
//       }
//     }
//     if (!counted) {
//       count += ppre.length; 
//     }
//   }
//   return count;
// }

// function countTriplets(arr, r) {
//   var occurs = {};
//   var count = 0;
//   for (var i = 0; i < arr.length; i ++) {
//     var k = arr[i];
//     if (k % (r * r) === 0) {
//       var kr = k / r;
//       var krr = kr / r;
//       var pre = occurs[kr];
//       var ppre = occurs[krr];
//       count += countBefore(pre, ppre);
//     }
//     var val = occurs[k];
//     if (val) {
//       occurs[k].push(i);
//     } else {
//       occurs[k] = [i];
//     }
//   }
//   return count;
// }

function inc(arr, i, val) {
  if (arr[i]) {
    arr[i] += val;
  } else {
    arr[i] = val;
  }
}

function countTriplets(arr, r) {
  var count = 0;
  var freqs = {};
  var second = {};
  for (var i = 0; i < arr.length; i ++) {
    // console.log(freqs, second, count)
    var k = arr[i];
    if (!(k % r)) {
      var kr = k / r;
      if (second[kr]) {
        count += second[kr];
      }
      if (freqs[kr]) {
        inc(second, k, freqs[kr]);
      }
    }
    inc(freqs, k, 1);
  }
  return count;
}

exports.countTriplets = countTriplets;
