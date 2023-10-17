/* 
 ██╗ ██╗ 
████████╗
╚██╔═██╔╝
████████╗
╚██╔═██╔╝
 ╚═╝ ╚═╝ 
         
    Given two 🎻 strings S and T containing only lowercase letters and "#" characters,
    return if they are equal when both are typed into empty text editors.
    👉 '#' character means a 'backspace' character.
    i.e., after processing the backspaces, are the two strings equal?
    return true or false
    Ninja Bonus: solve in O(n) time
*/

// ad#clp
// aclp

//          v
const S1 = "ab#c";
// a -> ab -> a -> ac
//          v
const T1 = "ad#c";
// a -> ad -> a -> ac
const expected1 = true;
// Explanation: Both S and T become "ac"

//          v
const S2 = "ab##";
// ["a", "b"]
// "str1"
// a -> ab -> a -> ""
const T2 = "c#d#";
// []
// "str2"
// c -> "" -> d -> "" 
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c";
// a -> "" -> "" -> c
const T3 = "#a#c";
// "" -> a -> "" -> c
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c";
// a -> "" -> c
const T4 = "b";
// b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

function backspaceStringCompare(str1, str2) {
    str1 = str1.split('');
    str2 = str2.split('');
    let str1final = [];
    let str2final = [];
    let i=0;
    let j=0;
    while(i < str1.length && j < str2.length){
        
        if(str1[i] !== '#'){
            str1final.push(str1[i])
        }
        else if(str1[i] === '#'){
            str1final.pop()
        }

        if(str2[j] !== '#'){
            str2final.push(str2[j])
        }
        else if(str2[j] === '#'){
            str2final.pop()
        }
        i++;j++
    }

    return str1final.join('') == str2final.join('')

    }



//---------------------

console.log(backspaceStringCompare(S1, T1))
console.log(backspaceStringCompare(S2, T2))
console.log(backspaceStringCompare(S3, T3))
console.log(backspaceStringCompare(S4, T4))