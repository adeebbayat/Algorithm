/* 
  findByIdAndUpdate(id, updateObject, arr)
  Given an id, an object that has keys with corresponding updated values, and an array of objects
  Find the object by "id" key that matches the given id value and then update that object's
  keys with the provided new values.
  Return the updated object, or null if no object was found

  check
  someObj.hasOwnProperty("key")
  obj[key] === undefined
  Object.keys(someObj) // returns [an array of "keys"]
*/

const students = [
    {
      id: 1,
      name: "student1",
      isLateToday: false,
      lateCount: 15,
      redBeltStatus: false
    },
    {
      id: 2,
      name: "student2",
      isLateToday: false,
      lateCount: 1,
      redBeltStatus: false
    },
    {
      id: 3,
      name: "student3",
      isLateToday: false,
      lateCount: 0,
      redBeltStatus: false
    }
  ];
  
  // Ninja.findByIdAndUpdate(req.params._id, {updateObject})
  /*
    something
    here
  */

    /**
   * Finds the specified obj by id and updates it with the given key value pairs.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} id
   * @param {Object} updatedValues Key value pairs used to update the found obj.
   * @param {Array<Object>} collection
   * @returns {?Object} The object that was updated or null if no object found.
   */


function findByIdAndUpdate(id, updatedValues, collection) { 
    // Check if the given ID is within the valid range of collection indices
    if(id <= collection.length){
      // Extract the keys and values from the updatedValues object
    let keys = Object.keys(updatedValues)
    let values = Object.values(updatedValues)
      // Iterate through the keys and values
    for(let i = 0; i < keys.length; i++){
        // Check if the collection object at the specified index (id-1) has the property (key)
        if(collection[id-1].hasOwnProperty(keys[i])){
          // Update the property with the new value
        collection[id-1][keys[i]] = values[i]
        }
    }
    
      // Return the updated object from the collection
    return collection[id-1]
    }
    
    // If the ID is out of range, return null
    return null
}




console.log(findByIdAndUpdate(3, { redBeltStatus: true }, students));
console.log(findByIdAndUpdate(1, { isLateToday: true, lateCount: 16, randomKey: "randomValue" }, students));
console.log(findByIdAndUpdate(5, {}, students));