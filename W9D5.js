
var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];

function mergeSort(arr) {
    // 1, split the array down to 1
    // call the merge mergeSortedArrays(left right)
    if (arr.length === 1){
      return arr
    }

    let halfpoint = Math.floor((arr.length)/2)
    let leftArray = mergeSort(arr.slice(0,halfpoint))


    let rightArray = mergeSort(arr.slice(halfpoint))

    
    return mergeSortedArrays(leftArray,rightArray)
}
console.log(mergeSort(testArr))



// helper function
// 👉 try solving this first! 
// return a new sorted array with all of the values of arr1 and arr2
var mergeArr2 = [55, 66];
var mergeArr1 = [33, 44];

var mergeArrA = [33, 44, 55];
var mergeArrB = [11, 66];

var arrLeft = [22];
var arrRight = [11, 33];
//                      arrLeft, arrRight
function mergeSortedArrays(arr1, arr2) {

    // setup
    let sortedArray = [];
    let leftIDX = 0;
    let rightIDX = 0;
    let endIDX = arr1.length + arr2.length
    for(var i = 0; i < endIDX; i++){

    if (arr1[leftIDX] < arr2[rightIDX]){
      sortedArray.push(arr1[leftIDX])
      arr1.shift()
    }
    if (arr2[rightIDX] < arr1[leftIDX]){
      sortedArray.push(arr2[rightIDX])
      arr2.shift()
    }
    if (arr1.length < 1){
      sortedArray.push(...arr2)
      break
    }
    if (arr2.length < 1){
      sortedArray.push(...arr1)
      break
    }
  }
    return sortedArray
}
// console.log(mergeSortedArrays(arrLeft,arrRight))