// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

// Hints

// None
// Input/Output

// [time limit] 4000ms (js)
// [input] array.string inputArray
// A non-empty array.

// Guaranteed constraints:

// 1 ≤ inputArray.length ≤ 10,

// 1 ≤ inputArray[i].length ≤ 10.

// [output] array.string
// Array of the longest strings, stored in the same order as in the inputArray.

let longestString = (arr) => {
    let newArray =[];
    let maxlength = 0;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index].length >= maxlength){
            maxlength =arr[index].length;
            newArray.push(arr[index]);
        }
        
    }
    return newArray



}

console.log(longestString(["aba", "aa", "ad", "vcd", "aba"]));