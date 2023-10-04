/* 
    This is an actual interview algorithm given to a Coding Dojo alum

    Find Consecutive Sums

    You are given arr, a list of positive integers 0-255
    You are given k, a integer between 1-255

    Find all the consecutive groups of integers that add up to the value k
*/

// inputs:
k = 16
arr = [2, 5, 3, 6, 7, 0, 0, 23, 11]

output = [
    [2, 5, 3, 6],
    [3, 6, 7], //  3, 6, 7 appear consecutively, so they are included in the solution
    [3, 6, 7, 0],
    [3, 6, 7, 0, 0]
]

const consecutiveArrays = (arr,k) => {
    //Initialize Array of Arrays
    var outsideArray = []
    for (var i = 0; i < arr.length; i++){
        //Initialize Inside Array
        let insideArray = []
        let insideArraySum = 0
        let j = i
        while(insideArraySum < k){
            //Push one index of arr at a time to insideArray and check sum, repeat
            insideArray.push(arr[j])
            insideArraySum += arr[j]
            j++
            if (j == arr.length-1){
                break
            }
            if (insideArraySum == 16){
                
                while(arr[j] == 0){
                    outsideArray.push([...insideArray])
                    insideArray.push(arr[j])
                    j++
                }

                outsideArray.push(insideArray)
                
            }
        }

        
        
        
    }
    return outsideArray
    

}

console.log(consecutiveArrays(arr,k))
// create new arrays
// if no matches, return empty array

// R.I.O.T.   Read Input Output Talk

// 1. Driver 🚗
// 2. Presenter 👩‍💻
// 3. Navigator 🧭

// 👉  take a few mins to write the pseudocode first:
// create the function and decide what params it needs and what it will return here: