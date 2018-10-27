// function maxCost(arr) {
//   var cache = {};
//   var len = arr.length - 1;
//   return memoMaxCost(arr, 0, len);

//   function memoMaxCost(arr, start, end) {
//     if (arr.length == 2) {
//       if (start == 0 && end == len) {
//         return Math.max(arr[1] - 1, arr[0] - 1);
//       } else if (start == 0) {
//         return Math.max(arr[1] - 1, Math.abs(arr[1] - arr[0]));
//       } else if (end == len) {
//         return Math.max(arr[0] - 1, Math.abs(arr[1] - arr[0]));
//       } else {
//         return Math.abs(arr[1] - arr[0]);
//       }
//     } else if (arr.length == 3) {
//       if (start != 0 && end != len) {
//         return Math.max(
//           (arr[2] - 1) + (arr[0] - 1),
//           Math.abs(arr[2] - arr[1]) + Math.abs(arr[0] - arr[1])
//         )
//       }
//     }

//     if (!(start == 0 || end == len)) {
//       if (cache.hasOwnProperty(arr)) {
//         return cache[arr];
//       }
//     }

//     var maxes = [];

//     for (var n = 1; n < arr.length - 1; n ++) {
//       var max = memoMaxCost(arr.slice(0, n + 1), start, start + n) +
//         memoMaxCost(arr.slice(n, arr.length), start + n, end);

//       if (arr[n] != 1) {
//         var head = arr.slice(0, n);
//         head.push(1);
//         var tail = arr.slice(n + 1, arr.length);
//         tail.unshift(1);
//         max = Math.max(
//           max,
//           memoMaxCost(head, start, start + n) +
//             memoMaxCost(tail, start + n, end)
//         );
//       }
//       maxes.push(max);
//     }

//     var ret = Math.max.apply(null, maxes);
//     if (!(start == 0 || end == len)) {
//       cache[arr] = ret;
//     }
//     console.log(cache);
//     return ret;
//   }

// }


// timeout
// function cost(arr) {
//   var copy = arr.slice()
//   copy[0] = 1;
//   return Math.max(fixHeadCost(arr),
//                   fixHeadCost(copy));
// }

// function fixHeadCost(arr) {
//   if (arr.length == 1) {
//     return 0;
//   }
//   if (arr.length == 2) {
//     return Math.max(
//       arr[0] - 1,
//       Math.abs(arr[0] - arr[1])
//     );
//   }
//   var first = arr.shift();
//   var copy = arr.slice();
//   copy[0] = 1;
//   return Math.max(
//     Math.abs(arr[0] - first) + fixHeadCost(arr),
//     (first - 1) + fixHeadCost(copy)
//   );
// }

// 反过来, shift 可能是 O(n)操作
// timeout
function cost(arr) {
  var counter = 0;
  var copy = arr.slice();
  copy[copy.length - 1] = 1;
  var ret = Math.max(fixTailCost(arr),
                     fixTailCost(copy));
  console.log(counter);
  return ret;


  function fixTailCost(arr) {

    counter ++;
    if (arr.length <= 1) {
      return 0;
    }
    if (arr.length == 2) {
      return Math.max(
        arr[1] - 1,
        Math.abs(arr[0] - arr[1])
      );
    }

    var last = arr.pop();

    if (last == 1) {
      return arr[arr.length - 1] - 1 + fixTailCost(arr);
    }
    
    var copy = arr.slice();
    copy[copy.length - 1] = 1;
    return Math.max(
      Math.abs(arr[arr.length - 1] - last) + fixTailCost(arr),
      (last - 1) + fixTailCost(copy)
    );
  }
} // counter : 5 14 14 10 2 2 18 18 5


function cost(arr) {
  var low = 0;
  var high = 0;

  for (var i = 1; i < arr.length; i ++) {
    var oldLow = low;
    low = Math.max(oldLow, high + arr[i - 1] - 1);
    high = Math.max(oldLow + arr[i] - 1, high + Math.abs(arr[i] - arr[i - 1]));
  }
  return Math.max(low, high);
}


exports.cost = cost;


