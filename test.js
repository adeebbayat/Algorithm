const str1 = "b70a164c32a20c10";
const expected1 = "a184b70c42";

// 1. DRIVER 🚗
// 2. PRESENTER 👨‍🏫
// 3. NAVIGATOR 🧭

function rehash(str) {
    const hashmap = {};
    let num = "";
    let letter = str[0];
    let repeat = false;
    for (let i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            num += str[i];
            if(i === str.length-1){
                hashmap[letter] = hashmap[letter] += parseInt(num)
            }
        } else if (isNaN(str[i])) {
            if(hashmap.hasOwnProperty(str[i])){
                repeat = true
            }
            if(repeat === false){
                hashmap[letter] = parseInt(num)
            }
            else if (repeat === true){
                hashmap[letter] = hashmap[letter] += parseInt(num)
            }
            repeat = false
            letter = str[i]
            num = ""
        }

        console.log(hashmap)
    }
}

rehash(str1);