'use strict';

function findLongestWord(str) {
    return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
  };
  
  console.log(findLongestWord('May the force be with you')); 