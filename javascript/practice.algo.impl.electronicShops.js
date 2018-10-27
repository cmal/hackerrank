function getMoneySpent(keyboards, drives, b) {
    /*
     * Write your code here.
     */
  var k = keyboards.sort(compare);
  var d = drives.sort(compare);
  if (k[0] + d[0] > b) return -1;
  var i = 0;
  var j = 0;
  var max = 0;
  increaseI();
  if (k[i] + d[j] == b) return b;
  increaseJ();
  if (k[i] + d[j] == b) return b;
  max = k[i] + d[j];
  var midi = i;
  var midj = j;

  while(j < d.length - 1 && i > 0) {
    i --;
    increaseJ();
    var use = k[i] + d[j];
    if (use == b) return b;
    if (max < use) {
      max = use;
    }
  }

  i = midi;
  j = midj;

  while(i < d.length - 1 && j > 0) {
    j --;
    increaseI();
    var use = k[i] + d[j];
    if (use == b) return b;
    if (max < use) {
      max = use;
    }
  }
  return max;

  function compare(a, b) {
    return a - b;
  }

  function increaseI() {
    while(k[i] + d[j] <= b && i < k.length) {
      i ++;
    }
    i --;
  }

  function increaseJ() {
    while(k[i] + d[j] <= b && j < d.length) {
      j ++;
    }
    j --;
  }
}

exports.getMoneySpent = getMoneySpent;
