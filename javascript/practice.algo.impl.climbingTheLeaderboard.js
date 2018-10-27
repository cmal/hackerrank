function climbingTheLeaderboard(scores, alice) {
  var ranks = [];
  var last = scores[0];
  var ladder = [last];
  for (var i = 1; i < scores.length; i ++) {
    if (scores[i] != last) {
      last = scores[i]
      ladder.push(last);
     }
  }
  var beg, end;
  beg = 0;
  end = ladder.length;

  for (var i = 0; i < alice.length; i ++) {
    var score = alice[i];
    var rank = findRank(beg, end);
    ranks.push(rank);
    end = rank;
  }
  return ranks.map(a => a + 1);

  function findRank(beg, end) {
    if (end == beg) return beg;
    if (ladder[beg] < score) {
      return beg;
    }
    // if (end - beg == 1) {
    //   return end;
    // }
    var mid = parseInt((beg + end) / 2);
    if (ladder[mid] === score) {
      return mid;
    } else if (ladder[mid] < score) {
      return findRank(beg, mid);
    } else {
      return findRank(mid + 1, end);
    }
  }

}

exports.climbingTheLeaderboard = climbingTheLeaderboard;
