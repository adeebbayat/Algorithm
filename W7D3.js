const nums1 = [1, 1, 1, 1];
const expected1 = [1];

const nums2 = [1, 1, 2, 2, 3, 3];
const expected2 = [1, 2, 3];

const nums3 = [1, 1, 2, 3, 3, 4];
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 1];
const expected4 = [1];

/**
 * De-dupes the given sorted array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {Array<number>} The given array deduped.
 */
function dedupeSorted(nums) {
    indexes = []
    temp = []
    for(var i = 0; i < 10; i++){
        nums.forEach((element, index) => {
            if (element === i) {
            indexes.push(index);
            }
        })
    if (indexes.length > 0){
        temp.push(i)
    }
    indexes = []
}
return temp
}
console.log(dedupeSorted(nums1) + " should be " + expected1)
console.log(dedupeSorted(nums2) + " should be " + expected2)
console.log(dedupeSorted(nums3) + " should be " + expected3)
console.log(dedupeSorted(nums4) + " should be " + expected4)