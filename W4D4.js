/*
  Input: Two arrays of equal length containing integers
  Output: A new array where each item is the sum of
  the items in arr1 and arr2 at that same index
 */

var numbersA1 = [20, 10, 30];
var numbersB1 = [10, 30, 20];
var expected1 = [30, 40, 50];

/**
 * Returns a new array that is the sum of the columns of the two given arrays
 * of equal lengths.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums1
 * @param {Array<number>} nums2
 * @returns {Array<number>} The column sums.
 */
function sumArrColumns(nums1, nums2) {
  var result = [];
  for (var i = 0; i < nums1.length; i++) {
    result[i] = nums1[i] + nums2[i];
  }
  console.log(result);
}

sumArrColumns(numbersA1, numbersB1);

/*****************************************************************************/

/**
 * Given an array, return a new array which contains the items from a starting index
 * up to, but not including, an ending index
 */

var arr1 = ["a", "b", "c", "d", "e"];
var startIdx1 = 2;
var stopIdx1 = 4;
var expected1 = ["c", "d"];

var arr2 = ["a", "b", "c", "d", "e"];
var startIdx2 = 0;
var stopIdx2 = 3;
var expected2 = ["a", "b", "c"];

var arr3 = ["e", "f", "g"];
var startIdx3 = 0;
var stopIdx3 = 5;
var expected3 = ["e", "f", "g"];

var arr4 = ["e", "f", "g"];
var startIdx4 = -2;
var stopIdx4 = 2;
var expected4 = ["e", "f"];

var arr5 = ["e", "f", "g"];
var startIdx5 = 1;
var stopIdx5 = 1;
var expected5 = [];

var arr6 = [];
var startIdx6 = 0;
var stopIdx6 = 1;
var expected6 = [];

/**
 * Returns a new array which consists of the elements from the start index and up to but not including
 * the stop index (exclusive)
 * @param {Array<number>} items
 * @param {number} startIdx
 * @param {number} stopIdx
 * @returns {Array<number>} the sliced portion of the array
 */
function slice(items, startIdx, stopIdx) {
  var result = [];
  if (startIdx < 0) {
    startIdx = 0;
  }
  if (stopIdx > items.length) {
    stopIdx = items.length;
  }
  var counter = 0;
  for (var i = startIdx; i < stopIdx; i++) {
    result[counter] = items[i];
    counter++;
  }
  console.log(result);
}

slice(arr1, startIdx1, stopIdx1);
console.log(expected1);
slice(arr2, startIdx2, stopIdx2);
console.log(expected2);
slice(arr3, startIdx3, stopIdx3);
console.log(expected3);
slice(arr4, startIdx4, stopIdx4);
console.log(expected4);
slice(arr5, startIdx5, stopIdx5);
console.log(expected5);
slice(arr6, startIdx6, stopIdx6);
console.log(expected6);
