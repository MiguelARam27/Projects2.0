// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

// Example

// For inputArray = [2, 4, 1, 0], the output should be arrayMaximalAdjacentDifference(inputArray) = 3.

// Hints

// Math.abs()
// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer inputArray
// Guaranteed constraints:

// 3 ≤ inputArray.length ≤ 10,

// -15 ≤ inputArray[i] ≤ 15.

// [output] integer
// The maximal absolute difference.

const MaximalAdjacentDifference = (arr) =>{
    let difference1 = 0;
    let difference2 = 0;
    let maxDiff = 0;

    for (let index = 0; index < arr.length; index++) {
        difference1 = arr[index]-arr[index-1];
        difference2 = arr[index]-arr[index+1];

        Math.abs(difference1);
        Math.abs(difference2);
        
        difference2 >= maxDiff ? maxDiff = difference2: maxDiff = maxDiff;
        difference1 >= maxDiff ? maxDiff = difference2: maxDiff = maxDiff;  
    }
    return maxDiff
    
}
console.log(MaximalAdjacentDifference([2, 4, 1, 0]))