s = 'aba'
n = 10


function repeatedString(s, n) {
    if(s === 'a'){
        return n
    }
    const infiniteString = [];
    while(infiniteString.length < n){
        for(let i = 0; i < s.length; i++){
            infiniteString.push(s[i])
            if(infiniteString.length === n){
                break
            }
        }
    }
    const joinedString = infiniteString.join('')
    let counter = 0;
    for(let j = 0; j < joinedString.length; j++){
        if(joinedString[j] === 'a'){
            counter++
        }
    }
    return counter

}

console.log(repeatedString(s,n))