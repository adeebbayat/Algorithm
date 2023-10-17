nums = [3,2,3]

var majorityElement = function(nums) {
    hashMap = {};
    for(let i = 0; i < nums.length; i++){
        if(!hashMap.hasOwnProperty(nums[i])){
            hashMap[nums[i]] = 1
        } else if (hashMap.hasOwnProperty(nums[i])){
            hashMap[nums[i]] += 1
        }
    }
    console.log(hashMap)
    let values=Object.values(hashMap)
    values.sort()
    return values[0]

};

console.log(majorityElement(nums))