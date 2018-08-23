function inc(counter, k) {
  if (counter[k]) {
    counter[k] ++;
  } else {
    counter[k] = 1;
  }
}

function freqQuery(queries) {
  var array = {}; // frequencies
  var counter = {};
  var result = [];
  for (var i = 0; i < queries.length; i ++) {
    var op = queries[i][0];
    var k = queries[i][1];
    var v = array[k];
    switch(op) {
    case 1:
      if(v) {
        array[k] = v + 1;
        counter[v] --;
        inc(counter, v + 1);
      } else {
        array[k] = 1;
        inc(counter, 1);
      }
      break;
    case 2:
      if (v && v > 0) {
        array[k] = v - 1;
        counter[v] --;
        inc(counter, v - 1);
      } else {
        array[k] = 0;
      }
      break;
    case 3:
      result.push(counter[k] && counter[k] > 0 ? 1 : 0);
      break;
    }
  }
  return result;
}

exports.freqQuery = freqQuery;
