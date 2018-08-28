var assert = require('assert');
var should = require('chai').should()

describe('counting inversions', function() {
  var countInversions = require('../ipk.sort.countInversions.js').countInversions;
  describe('#countingInversions()', function() {
    it('[1,1,1,2,2] should give right results', function() {
      countInversions([1,1,1,2,2]).should.equal(0);
    });
    it('[2,1,3,1,2] should give right results', function() {
      countInversions([2,1,3,1,2]).should.equal(4);
    });
    it('[1,3,5,7] should give right results', function() {
      countInversions([1,3,5,7]).should.equal(0);
    });
    it('[1,5,3,7] should give right results', function() {
      countInversions([1,5,3,7]).should.equal(1);
    });
    it('[7,5,3,1] should give right results', function() {
      countInversions([7,5,3,1]).should.equal(6);
    });
    it('[3,2,1] should give right results', function() {
      countInversions([3,2,1]).should.equal(3);
    });
  });
});

describe('ransom note', function() {
  var checkMagazine = require('../ipk.hashmap.ransomNote.js').checkMagazine;
  describe('#checkMagazine()', function() {
    it('should return corrent Answer', function() {
      checkMagazine(
        ["give","me","one","grand","today","night"],
        ["give","one","grand","today"]
      ).should.equal("Yes");
      checkMagazine(
        ["two","times","three","is","not","four"],
        ["two","times","two","is","four"]
      ).should.equal("No");
      checkMagazine(
        ["ive","got","a","lovely","bunch","of","coconuts"],
        ["ive","got","some","coconuts"]
      ).should.equal("No");
    })
  })
})

describe('two strings', function() {
  var twoStrings = require('../ipk.hashmap.twoStrings.js').twoStrings;
  describe('#twoStrings()', function() {
    it('should return correct ANswer', function() {
      twoStrings('hello', 'world').should.equal('YES');
      twoStrings('hi', 'world').should.equal('NO');
    })
  }) 
})

// describe('', function() {
//   var xxx = require('../ipk.hashmap.xx.js').xxx;
//   describe('#xxx()', function() {
//     it ('should return correct answer', function() {
//       xxx().should.equal();
//       xxx().should.equal();
//     })
//   })
// });

describe('sherlock and anagrams', function() {
  var sherLockAndAnagrams = require('../ipk.hashmap.sherLockAndAnagrams.js').sherLockAndAnagrams;
  describe('#sherLockAndAnagrams()', function() {
    it ('should return correct answer', function() {
      sherLockAndAnagrams('kkkk').should.equal(10);
    })
  })
})

describe('frequency queries', function() {
  var freqQuery = require('../ipk.hashmap.frequencyQueries.js').freqQuery;
  describe('#freqQuery()', function() {
    it ('should return correct answer', function() {
      freqQuery([[1,1],[2,2],[3,2],[1,1],[1,1],[2,1],[3,2]])
        .toString().should.equal('0,1');

      freqQuery([[1,5],[1,6],[3,2],[1,10],[1,10],[1,6],[2,5],[3,2]])
        .toString().should.equal('0,1');

      freqQuery([[3,4],[2,1003],[1,16],[3,1]])
        .toString().should.equal('0,1');

      freqQuery([[1,3],[2,3],[3,2],[1,4],[1,5],[1,5],[1,4],[3,2],[2,4],[3,2]])
        .toString().should.equal('0,1,1');
    }) 
  })
})

describe('count triplets', function() {
  var countTriplets = require('../ipk.hashmap.countTriplets.js').countTriplets;
  describe('#countTriplets()', function() {
    it ('should return correct answer', function() {
      countTriplets([1,1,1],1).should.equal(1);
      countTriplets([1,1,1,1],1).should.equal(4);
      countTriplets([1,4,16,64],4).should.equal(2);
      countTriplets([1,2,2,4],2).should.equal(2);
      countTriplets([1,3,9,9,27,81],3).should.equal(6);
      countTriplets([1,5,5,25,125],5).should.equal(4);
      countTriplets([1,2,1,2,4],2).should.equal(3);
      countTriplets([5,5,5,7,7,5,5,7,7,7],1).should.equal(20);
      countTriplets([9,9,9,9,9],1).should.equal(10);
      countTriplets([4,4,4,4,4,4,4,4,4,4],1).should.equal(120);
    })
  })
})

describe('Bubble Sort', function() {
  var countSwaps = require('../ipk.sort.bubbleSort.js').countSwaps;
  describe('#bubbleSort()', function() {
    it ('should return correct answer', function() {
      countSwaps([6,4,1]).toString().should.equal('3,1,6');
      countSwaps([1,2,3]).toString().should.equal('0,1,3');
      countSwaps([3,2,1]).toString().should.equal('3,1,3');
      countSwaps([4,2,3,1]).toString().should.equal('5,1,4');
    })
  })
})

describe('utils', function() {
  var insertionSort = require('../utils.js').insertionSort;
  describe('#insertionSort()', function() {
    it('insertion sort should return correct answer', function() {
      insertionSort([]).toString().should.equal('');
      insertionSort([1]).toString().should.equal('1');
      insertionSort([1,2]).toString().should.equal('1,2');
      insertionSort([2,1,3]).toString().should.equal('1,2,3');
    });
  });
  var quickSort = require('../utils.js').quickSort;
  describe('#quickSort()', function() {
    it('quicksort should return correct answer', function() {
      var a;
      a = [];
      quickSort(a);
      a.toString().should.equal('');
      a = [1];
      quickSort(a);
      a.toString().should.equal('1');
      a = [1,2];
      quickSort(a);
      a.toString().should.equal('1,2');
      a = [2,1,3];
      quickSort(a);
      a.toString().should.equal('1,2,3');
      a = [6,2,1,3,9,8,7,4,5];
      quickSort(a);
      a.toString().should.equal('1,2,3,4,5,6,7,8,9');
    })
  })

  var take = require('../utils.js').take;
  describe('#take()', function() {
    it('take should return correct answer', function() {
      var arr = [1,2,3,4,5];
      take(arr, 2, 0).toString().should.equal('1,2')
      take(arr, 2, 1).toString().should.equal('2,3');
      take(arr, 2, 4).toString().should.equal('5');
      take(arr, 2, 5).toString().should.equal('');
    })
  });
  
  var partition = require('../utils.js').partition;
  describe('#partition()', function() {
    it ('parition should return correct answer', function() {
      var arr = [1,2,3,4,5];
      partition(2, 1, arr).toString().should.equal('1,2,2,3,3,4,4,5');
      partition(2, 1, arr).length.should.equal(4);
    }) 
  })
  var groupBy = require('../utils.js').groupBy;
  describe('#groupBy()', function() {
    it ('groupBy should return correct answer', function() {
      var arr = [1,2,3,4,5];
      var f = x => x % 2;
      var groups = groupBy(f, arr);
      Object.keys(groups).toString().should.equal('0,1');
      Object.values(groups).toString().should.equal('2,4,1,3,5');
    })
  })

  var selectionSort = require('../utils.js').selectionSort;
  describe('#selectionSort()', function() {
    it('selection sort should return correct answer', function() {
      selectionSort([]).toString().should.equal('');
      selectionSort([1]).toString().should.equal('1');
      selectionSort([1,2]).toString().should.equal('1,2');
      selectionSort([2,1,3]).toString().should.equal('1,2,3');
    });
  });

  var QuickSort = require('../utils.js').QuickSort;
  describe('#QuickSort()', function() {
    it('QuickSort should return correct answer', function() {
      var a = [];
      QuickSort(a, 0, a.length);
      a.toString().should.equal('');
      a = [1];
      QuickSort(a, 0, a.length);
      a.toString().should.equal('1');
      a = [1,2];
      QuickSort(a, 0, a.length);
      a.toString().should.equal('1,2');
      a = [2,1,3];
      QuickSort(a, 0, a.length);
      a.toString().should.equal('1,2,3');
      a = [6,2,1,3,9,8,7,4,5];
      QuickSort(a, 0, a.length);
      a.toString().should.equal('1,2,3,4,5,6,7,8,9');
    });
  });

})


describe('Lily\'s Homework', function() {
  var lilysHomework = require('../ipk.sort.lilysHomework.js').lilysHomework;
  describe('#lilysHomework()', function() {
    it ('should return correct answer', function() {
      lilysHomework([2,5,3,1]).should.equal(2);
      lilysHomework([72,3,0,4,1,6,5,2]).should.equal(5);
      lilysHomework([1,5,3,4]).should.equal(2);
      lilysHomework([3,4,2,1,5]).should.equal(3);
      lilysHomework([1,4,0,21,9]).should.equal(3);
      lilysHomework([4,3,2,1]).should.equal(0);
      lilysHomework([7,15,1,4,10]).should.equal(3);
    })
  })
})

describe('minimumSwaps2', function() {
  var minimumSwaps = require('../challenges.minimumSwaps2.js').minimumSwaps;
  describe('#minimumSwaps()', function() {
    it ('should return correct answer', function() {
      minimumSwaps([2,5,3,1]).should.equal(2);
      minimumSwaps([72,3,0,4,1,6,5,2]).should.equal(5);
      minimumSwaps([1,5,3,4]).should.equal(2);
      minimumSwaps([3,4,2,1,5]).should.equal(3);
      minimumSwaps([1,4,0,21,9]).should.equal(3);
      minimumSwaps([4,3,1,2]).should.equal(3);
      minimumSwaps([2,3,4,1,5]).should.equal(3);
      minimumSwaps([1,3,5,2,4,6,8]).should.equal(3);
    })
  })
})


describe ('isBalanced', function() {
  var isBalanced = require('../practice.ds.stack.balanceParentheses.js').isBalanced;
  describe('#isBalanced()', function() {
    it ('should return correct answer', function() {
      isBalanced('{[()]}').should.equal('YES');
      isBalanced('{[(])}').should.equal('NO');
      isBalanced('{{[[(())]]}}').should.equal('YES');
      isBalanced('{{[[(())]]}').should.equal('NO');
    })
  })
}) 

describe('equalStacks', function() {
  var equalStacks = require('../practice.ds.stack.equalStacks.js').equalStacks;
  describe('#equalStacks()', function() {
    it ('should return correct values', function() {
      equalStacks([3,2,1,1,1],[4,3,2],[1,1,4,1]).should.equal(5);
    }) 
  })
})

describe('twoStacks', function() {
  var twoStacks = require('../practice.ds.stack.gameOfTwoStacks.js').twoStacks;
  describe('#twoStacks()', function() {
    it ('should return correct values', function() {
      twoStacks([4,2,4,6,1],[2,1,8,5],10).should.equal(4);
      twoStacks([17,1,1,1,2], [8,8,6,4], 20).should.equal(4);
    })
  })
})
