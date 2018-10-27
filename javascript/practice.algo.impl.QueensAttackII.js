function queensAttack(n, k, r_q, c_q, obstacles) {
  var obs = {};
  for (var i = 0; i < obstacles.length; i ++) {
    obs[obstacles[i].join('_')] = true;
  }

  var cnt = 0;
  var r,c;

  // to top
  test(-1, 0);

  // to top right
  test(-1, 1);

  // to right
  test(0, 1);

  // to bottom right
  test(1, 1);

  // to bottom
  test(1, 0);

  // to bottom right
  test(1, -1);

  // to left
  test(0, -1);

  // to top left;
  test(-1, -1);


  function test(rdiff, cdiff) {
    r = r_q;
    c = c_q;
    while(true) {
      r += rdiff;
      c += cdiff;
      if (r < 1 || c < 1 || r > n ||c > n) break;
      if (obs[r + '_' + c]) break;
      cnt ++;
    }

  }

  return cnt;

}

exports.queensAttack = queensAttack;
