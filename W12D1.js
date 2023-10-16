/*          __                        __         
           /\ \                      /\ \        
 _ __    __\ \ \___      __      ____\ \ \___    
/\`'__\/'__`\ \  _ `\  /'__`\   /',__\\ \  _ `\  
\ \ \//\  __/\ \ \ \ \/\ \L\.\_/\__, `\\ \ \ \ \ 
 \ \_\\ \____\\ \_\ \_\ \__/.\_\/\____/ \ \_\ \_\
  \/_/ \/____/ \/_/\/_/\/__/\/_/\/___/   \/_/\/_/

    Given to a Coding Dojo alumni by Riot Games.
    Rehash an incorrectly hashed string by combining letter count occurrences
    and alphabetizing them.
*/
//            V
const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// 1. DRIVER 🚗
// 2. PRESENTER 👨‍🏫
// 3. NAVIGATOR 🧭

function rehash(str) {
    const hashmap = {};
    let num = "";
    let letter = "";
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {

            num += str[i];
        } else if (isNaN(str[i])) {
            if (!hashmap.hasOwnProperty(str[i])) {
                if (i !== 0) {
                    hashmap[letter] += parseInt(num);
                }
                letter = str[i];
                hashmap[str[i]] = 0;
            } else {
                hashmap[str[i]] += parseInt(num);
            }
            num = ""
        }

    }
    console.log(hashmap)
}

rehash(str1);
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");

// hints
// isNaN
// parseInt()
// someObj.hasOwnProperty("key")
