/* 
  Recursively sum an arr of ints
*/

const nums1 = [1, 2, 3];
const expected1 = 6;

const nums2 = [1];
const expected2 = 1;

const nums3 = [];
const expected3 = 0;


const nums4 = [1, 2, 3, 4, 5];
const expected4 = 15;

/**
 * Add params if needed for recursion
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums,expected = 0) {
    if(nums.length <1){
        return expected
    }
    
    expected += nums[nums.length-1]
    nums.pop()
    return sumArr(nums,expected)
}

console.log(sumArr(nums1))
console.log(sumArr(nums2))
console.log(sumArr(nums3))
console.log(sumArr(nums4))
/*****************************************************************************/
