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

// describe('sherlock and anagrams', function() {
//   var sherLockAndAnagrams = require('../ipk.hashmap.sherLockAndAnagrams.js').sherLockAndAnagrams;
//   describe('#sherLockAndAnagrams()', function() {
//     it ('should return correct answer', function() {
//       sherLockAndAnagrams('kkkk').should.equal(10);
//     })
//   })
// })

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
