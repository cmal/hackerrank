function flatlandSpaceStations(n, c) {
  c.sort((a, b) => a - b);
  // first, find the first and last city's nearst station
  var first = c[0];
  var last = n - 1 - c[c.length - 1];
  
  if (c.length == 1) {
    return Math.max(first, last);
  }
  // else, find the longest distance between two station
  var distMax = 0;
  for (var i = 0; i < c.length - 1; i ++) {
    var dist = c[i + 1] - c[i];
    distMax = Math.max(dist, distMax);
  }
  var between = distMax == 1 ? 0 : Math.floor(distMax / 2);
  return Math.max(first, last, between);
}

exports.flatlandSpaceStations = flatlandSpaceStations;
