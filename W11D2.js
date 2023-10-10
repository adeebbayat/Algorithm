/*
    findObjectsFilter({searchFor}, [itemsArr])

    given a 'search for' {object} with primitive values and a list of objects
    return a new list of objects containing the same key value pairs as the search for
*/

// given searchFor and items
const items = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "White", age: 31 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];
// db.ninjas.find({firstName: "Bob", age: 31})
const searchFor1 = {
    firstName: "Bob",
    age: 31
};
// return a new list of objects containing the same key pair values
const output1 = [
    { firstName: "Bob", lastName: "Robert", age: 31 },
    { firstName: "Bob", lastName: "White", age: 31 },
    // { firstName: "Bob", lastName: "Smith", age: 27 },
];

const searchFor2 = {
    lastName: "Smith",
};
const output2 = [
    { firstName: "John", lastName: "Smith", age: 25 },
    { firstName: "Bob", lastName: "Smith", age: 27 },
];

function findObjectsFilter(searchObj, items) {
    // PSEUDOCODE!!!!
}


function findObjectsFilter(searchObj, items) {
    const result = []; //initialize an empty array to store the matching objects
  
    //iterate through each item in the "items" array
  for (const item of items) {
      //assume that the item matches the search object to begin with
      let isMatch = true;
      //iterate through each key in the searchObj
      for (const key in searchObj) {
        //check if the item has the same key and the same value as in the searchobj
      if (item[key] !== searchObj[key]) {
          // if any key-value pair doesn't match, set isMatch to false and break loop
          isMatch = false;
          break;
      }
      }
      if (isMatch) {
        //if this is still true, then all key-value pairs matched - push to results
      result.push(item);
      }  
  }
  //return the array of matching objects 
  return result;
  }
console.log(findObjectsFilter(searchFor1,items))