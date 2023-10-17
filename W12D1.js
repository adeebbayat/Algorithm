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


const str2 = "b147a43d1l4p32h50f76c678x67z587a4567w87d6f787d6"
// 1. DRIVER 🚗
// 2. PRESENTER 👨‍🏫
// 3. NAVIGATOR 🧭

function rehash(str) {
    const hashmap = {};
    let num = "";
    let letter = "";
    for (let i = 0; i < str.length; i++) {
        // If is a number
        if (!isNaN(str[i])) {
            // Add each digit until full number is formed
            num += str[i];
        } 
        // If is a letter
        else if (isNaN(str[i])) {
            // If key does not yet exist
            if (!hashmap.hasOwnProperty(str[i])) {
                // If its not first iteration
                if (i !== 0) {
                    hashmap[letter] += parseInt(num);
                }
                // Initialize key of letter at str[i]
                hashmap[str[i]] = 0;
            } 
            // If key already exists
            else {
                // parseInt num and add it to the current value of the key
                hashmap[letter] += parseInt(num);
            }
            // store the current letter so upon next letter we can push all previously stored numbers to this letter
            letter = str[i];
            // reset num
            num = ""
        }
        // If last iteration of loop there is no final letter so must manually add num to the last letter
        if(i === str.length-1){
            hashmap[letter] += parseInt(num)
        }

    }
    return hashmap
}

console.log(rehash(str2));
// console.log(rehash(str1) === expected1, "<-- should be \"true\"");

// hints
// isNaN
// parseInt()
// someObj.hasOwnProperty("key")
