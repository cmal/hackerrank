var insertionSort = require('./utils.js').insertionSort;
var quickSort = require('./utils.js').quickSort;
// var take = require('./utils.js').take;
var partition = require('./utils.js').partition;
var groupBy = require('./utils.js').groupBy;

var sort = function(arr) {
  if (arr.length < 47) {
    return insertionSort(arr).toString();
  }
  return quickSort(arr).toString();
}

function sherLockAndAnagrams(s) {
  var sum = 0;
  for (var i = s.length - 1; i > 0; i --) {
    var a = s.split('');
    var b = partition(i, 1, a);
    var c = groupBy(sort, b);
    var d = Object.values(c);
    var e = d
        .map(function(item) { return item.length; })
        .filter(function(item) { return item > 1; })
        .map(function(m) { return (m * (m - 1)) / 2; })
        .reduce(function(a, b) { return a + b; });
    sum += e;
  }
  return sum;
}

exports.sherLockAndAnagrams = sherLockAndAnagrams;
