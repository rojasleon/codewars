// Name
/*
  Count Odd Numbers below n
*/

// Url
/*
  https://www.codewars.com/kata/count-odd-numbers-below-n/train/javascript
*/

// Instructions
/*
  Given a number n, return the number of positive odd numbers below n, EASY!
*/

// Examples
/*
  oddCount(7) //=> 3, i.e [1, 3, 5]
  oddCount(15) //=> 7, i.e [1, 3, 5, 7, 9, 11, 13]
*/

function oddCount(n) {
  return Math.floor(n / 2);
}

oddCount(15);
