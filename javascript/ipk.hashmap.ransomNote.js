function checkMagazine(magazine, note) {
  var m = {};
  var n = {};
  for (var i = 0; i < magazine.length; i ++) {
    if (m[magazine[i]]) {
      m[magazine[i]] ++;
    } else {
      m[magazine[i]] = 1;
    }
  }
  for (var i = 0; i < note.length; i ++) {
    if (n[note[i]]) {
      n[note[i]] ++;
    } else {
      n[note[i]] = 1;
    }
  }
  for (var k in n) {
    if (!m[k]) return 'No';
    if (n[k] > m[k]) return 'No';
  }
  
  return 'Yes';
}


exports.checkMagazine = checkMagazine;
