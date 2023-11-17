
let steps = 8;
let path = "UDDDUDUU";

function countingValleys(steps, path) {
    let elevation = 0;
    let numberOfValleys = 0;
 
    for (let i = 0; i < path.length; i++){
    
        if(elevation === -1 && path[i] === "U"){
            numberOfValleys++
        }
        if(path[i] === "D"){
            elevation--;
        }
        if(path[i] === "U"){
            elevation++;
        }

    }
    return numberOfValleys
}

console.log(countingValleys(steps,path));
console.log(1)