// /* 
//   Given two arrays, interleave them into one new array.

//   The arrays may be different lengths. The extra items should be added to the
//   back of the new array.
// */

// const arrA1 = [1, 2, 3];
// const arrB1 = ["a", "b", "c"];
// const expected1 = [1, "a", 2, "b", 3, "c"];

// const arrA2 = [1, 3];
// const arrB2 = [2, 4, 6, 8];
// const expected2 = [1, 2, 3, 4, 6, 8];

// const arrA3 = [1, 3, 5, 7];
// const arrB3 = [2, 4];
// const expected3 = [1, 2, 3, 4, 5, 7];

// const arrA4 = [];
// const arrB4 = [42, 0, 6];
// const expected4 = [42, 0, 6];

// /**
//  * Interleaves two arrays into a new array. Interleaving means alternating
//  * the items starting from the first array.
//  * - Time: O(?).
//  * - Space: O(?).
//  * @param {Array<any>} arr1
//  * @param {Array<any>} arr2
//  * @returns {Array<any>} A new array of interleaved items.
//  */
// function interleaveArrays(arr1, arr2) {
//     iterator = Math.max(arr1.length,arr2.length)
//     newArr = []
//     for(var i = 0; i < iterator; i++){
//         if (i < arr1.length){
//             newArr.push(arr1[i])
//         }
//         if (i < arr2.length){
//             newArr.push(arr2[i])
//         }
//     }
//     return newArr
// }
// console.log(interleaveArrays(arrA4,arrB4))
// /*****************************************************************************/


/* 
  Given an array of integers
  return the first integer from the array that is not repeated anywhere else

  If there are multiple non-repeated integers in the array,
  the "first" one will be the one with the lowest index.
*/

const nums1 = [3, 5, 4, 3, 4, 6, 5, 7];
const expected1 = 6;


const nums2 = [3, 5, 5];
const expected2 = 3;

const nums3 = [3, 3, 5];
const expected3 = 5;

const nums4 = [5];
const expected4 = 5;

const nums5 = [];
const expected5 = null;

/**
 * Finds the first int from the given array that has no duplicates. I.e., the
 *    item at the lowest index that doesn't appear again in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number|null} The first int value from the given array that has no
 *    dupes or null if there is none.
 */
function firstNonRepeated(nums) {
    indexes = [];
    numstemp = [];
    if (nums.length > 0){
        numstemp = Math.max(...nums)
    }
    else {
        numstemp = 0
    }
    for(var i = 0; i < numstemp + 1; i++){
    nums.forEach((element, index) => {
        if (element === i) {
        indexes.push(index);
        }
    })
    if (indexes.length == 1){
        return nums[indexes]
    }
    indexes = []
}
return null
}
console.log(firstNonRepeated(nums1) + " should be " + expected1)
console.log(firstNonRepeated(nums2) + " should be " + expected2)
console.log(firstNonRepeated(nums3) + " should be " + expected3)
console.log(firstNonRepeated(nums4) + " should be " + expected4)
console.log(firstNonRepeated(nums5) + " should be " + expected5)

/*****************************************************************************/