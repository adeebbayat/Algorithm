const nums1 = [1, 2, 3, 4, 5, 6, 7];
const k1 = 3;
const expected1 = [5, 6, 7, 1, 2, 3, 4];


const nums2 = [-1, -100, 3, 99];
const k2 = 2;
const expected2 = [3, 99, -1, -100];


const nums3 = [1, 2, 3, 4];
const k3 = 4;
const expected3 = [1, 2, 3, 4];

const nums4 = [1, 2];
const k4 = 5;
const expected4 = [2, 1];


function rotate(nums, k){
    for(var i = 0; i < k; i++){
        var temp = nums[nums.length-1];
        nums.splice(0,0,temp);
        nums.pop();
    }
    return nums;
}
console.log(rotate(nums1, k1))