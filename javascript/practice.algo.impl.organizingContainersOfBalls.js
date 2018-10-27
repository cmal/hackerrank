// 思想
// 从上到下每个 container ，都需要找到一个元素，使得
// 该元素所在的 列元素之和 = 行元素之和
function organizingContainers(container) {
  var containerCnt = container.length;
  var typeCnt = container[0].length;
  var rowSums = [];
  var colSums = [];
  for (var i = 0; i < containerCnt; i ++) {
    var sum = 0;
    for (var j = 0; j < typeCnt; j ++) {
      sum += container[i][j];
    }
    rowSums.push(sum);
  }
  for (var j = 0; j < typeCnt; j ++) {
    var sum = 0;
    for (var i = 0; i < containerCnt; i ++) {
      sum += container[i][j];
    }
    colSums.push(sum);
  }
  return rowSums.sort().toString() == colSums.sort().toString() ? 'Possible' : 'Impossible';
}


exports.organizingContainers = organizingContainers;
