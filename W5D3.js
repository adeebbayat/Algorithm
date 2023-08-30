/* 
  String Encode

  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

  const str1 = "aaaabbcddd";
  const expected1 = "a4b2c1d3";
  
  const str2 = "";
  const expected2 = "";
  
  const str3 = "a";
  const expected3 = "a";

  const str4 = "bbcc";
  const expected4 = "bbcc";
  
  const str5 = "aaaabbcdddaaa";
  const expected5_bonus = "a4b2c1d3a3";
  const expected5 = "a7b2c1d3";

  /**
   * Encodes the given string such that duplicate characters appear once followed
   * by a number representing how many times the char occurs. Only encode strings
   * when the result yields a shorter length.
   * - Time: O(?).
   * - Space: O(?).
   * @param {string} str The string to encode.
   * @returns {string} The given string encoded.
   */
function encodeStr(str) {

    let encodedArr = [];

    str = str.split('').sort();
    console.log(str)
    for (i = 0; i < str.length; i++) {
        if (encodedArr.includes(str[i]) == false) {
            encodedArr.push(str[i]);
            encodedArr.push(1);
        }
        else if (encodedArr.includes(str[i]) == true) {
            encodedArr[encodedArr.indexOf(str[i])+1] += 1;
        }
    }

    let encodedStr = encodedArr.join('');
    return encodedStr;
    
}

console.log(encodeStr(str1) + " should be " + expected1)
console.log(encodeStr(str2) + " should be " + expected2)
console.log(encodeStr(str3) + " should be " + expected3)
console.log(encodeStr(str4) + " should be " + expected4)
console.log(encodeStr(str5) + " should be " + expected5)
/*****************************************************************************/
  /*****************************************************************************/

