// function formingMagicSquare(s) {
//   var arr = new Array(10).fill(0);
//   var ex = [];
//   var va = [];
//   for (var i = 0; i < 9; i ++) {
//     var num =  s[parseInt(i/3)][i%3];
//     if (arr[num - 1] == 1) {
//       ex.push(num);
//     } else {
//       arr[num - 1] = 1;
//     }
//   }

//   for (var i = 0; i < 9; i ++) {
//     if (!arr[i]) {
//       va.push(i + 1);
//     }
//   }

//   ex.sort(compare);
//   va.sort(compare);
//   var abs = 0;
//   for (var i = 0; i < ex.length; i ++) {
//     abs += Math.abs(ex[i] - va[i]);
//   }
//   return abs;

//   function compare(a, b) {return a - b;}
// }

// exports.formingMagicSquare = formingMagicSquare;
