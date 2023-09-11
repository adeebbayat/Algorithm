/* 
Given an array of ints representing a line of people where the space between
indexes is 1 foot, with 0 meaning no one is there and 1 meaning someone is in
that space,

return whether or not there is at least 6 feet separating every person.

Bonus: O(n) linear time (avoid nested loops that cause re-visiting indexes).
*/

const queue1 = [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1];
const expected1 = false;

const queue2 = [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected2 = true;

const queue3 = [1, 0, 0, 0, 0, 0, 0, 0, 1];
const expected3 = true;

const queue4 = [];
const expected4 = true;

/**
 * Determines whether each occupied space in the line of people is separated by
 * 6 empty spaces.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<0|1>} queue
 * @returns {Boolean}
 */
function socialDistancingEnforcer(queue) {
    indexes = [];
    temp = [];
    queue.forEach((element, index) => {
        if (element === 1) {
        indexes.push(index);
        }
    });
    for (var i = indexes.length-1; i > 0; i--){
        if ((indexes[i] - indexes[i-1]) < 6){
            return false
        }
    }
    return true
}
console.log(socialDistancingEnforcer(queue1),"should be",expected1)
console.log(socialDistancingEnforcer(queue2),"should be",expected2)
console.log(socialDistancingEnforcer(queue3),"should be",expected3)
console.log(socialDistancingEnforcer(queue4),"should be",expected4)

/*****************************************************************************/