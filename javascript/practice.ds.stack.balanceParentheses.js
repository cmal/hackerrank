function isBalanced(s) {
  var open = {
    '{': '}',
    '(': ')',
    '[': ']'
  };
  var stack = [];
  for (var i = 0; i < s.length; i ++) {
    if (open[s[i]]) {
      stack.push(open[s[i]]);
    } else {
      if (!stack.length) return 'NO';
      if (s[i] != stack.pop()) return 'NO';
    }
  }
  return stack.length ? 'NO' : 'YES';
}

exports.isBalanced = isBalanced;
