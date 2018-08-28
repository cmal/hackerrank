function equalStacks(s1, s2, s3) {
  // the first element is the top of the stack;
  var p1 = 0;
  var p2 = 0;
  var p3 = 0;
  var sum1 = s1.reduce((a, b) => a + b);
  var sum2 = s2.reduce((a, b) => a + b);
  var sum3 = s3.reduce((a, b) => a + b);

  while(true) {
    if (equalStacks12()) return 0;
    if (equalStacks13()) return 0;
    if (sum2 == sum3) return sum3;
    // console.log(p1, p2, p3);
  }

  function equalStacks12() {
    // equalize s1, s2
    // make sum1 == sum2
    while (sum1 != sum2) {
      if (!sum1 || !sum2) return true;
      if (sum1 > sum2) {
        sum1 -= s1[p1 ++];
      } else {
        sum2 -= s2[p2 ++];
      }
    }
    return false;
  }

  function equalStacks13() {
    while(sum1 != sum3) {
      if (!sum1 || !sum3) return true;
      if (sum1 > sum3) {
        sum1 -= s1[p1 ++];
      } else {
        sum3 -= s3[p3 ++];
      }
    }
    return false;
  }
}

exports.equalStacks = equalStacks;
