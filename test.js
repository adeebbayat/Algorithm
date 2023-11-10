var isHappy = function(n) {
    let isHappy = undefined, latestN = n;
    const squaredSet = new Set();

    while(isHappy === undefined) {
        let squaredNumsSum = 0;
        const squaredNums = latestN.toString().split("").map(num => num * num);

        for (let i = 0; i < squaredNums.length; i++) {
            squaredNumsSum += squaredNums[i];
        }

        if (squaredNumsSum == 1) {
            isHappy = true;
        }

        if (squaredSet.has(squaredNumsSum)) {
            isHappy = false;
        } else {
            squaredSet.add(squaredNumsSum);
        }

        latestN = squaredNumsSum;
    }

    return isHappy;
};

console.log(isHappy(19))