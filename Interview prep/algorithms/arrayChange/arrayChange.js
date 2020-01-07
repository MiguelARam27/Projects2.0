// You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input.

// Example

// For inputArray = [1, 1, 1], the output should be arrayChange(inputArray) = 3.

// Input/Output

// [time limit] 4000ms (js)
// [input] array.integer inputArray
// Guaranteed constraints:

// 3 ≤ inputArray.length ≤ 105,

// -105 ≤ inputArray[i] ≤ 105.

// [output] integer
// The minimal number of moves needed to obtain a strictly increasing sequence from inputArray. It's guaranteed that for the given test cases the answer always fits signed 32-bit integer type.

const arrayChange = (arr) =>{
    let counter = 0;
    let distance = 0;

    for (let index = 0; index < arr.length; index++) {
        if(arr[index] == arr[index+1]){
            distance = 1;
            counter+=distance;
            arr[index+1]+=1;
        }else if(arr[index]>arr[index+1]){
            arr[index+1]=arr[index]+1;
        }


    }

    return arr
}

console.log(arrayChange([1,1,1]))