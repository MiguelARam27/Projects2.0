// Given an array of 2k integers (for some integer k), perform the following operations until the array contains only one element:

// On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product. After the algorithm has finished, there will be a single element left in the array. Return that element.
// Example

// For inputArray = [1, 2, 3, 4, 5, 6, 7, 8], the output should be arrayConversion(inputArray) = 186.

// We have [1, 2, 3, 4, 5, 6, 7, 8] -> [3, 7, 11, 15] -> [21, 165] -> [186], so the answer is 186.

// Hints

// push()
// Input/Output

// [execution time limit] 5 seconds (ts)
// [input] array.integer inputArray
// Guaranteed constraints:

// 1 ≤ inputArray.length ≤ 20,

// -9 ≤ inputArray[i] ≤ 99.

// [output] integer

let arrayConversion = (arr) =>{

    let firstArr = [];
    let secondArr = [];
    let sum = 0;
    

    //loop to get the 
    for(let index = 0;index<arr.length;index++){
        //when the index is odd. 
        if(index % 2 !== 0 ){
            //get the first iteration by subtracting 1;
            firstArr.push( arr[index-1] + arr[index]);
            console.log(index-1)
            console.log(arr[index-1])
            console.log(firstArr)
        }
    }
    for(let index = 0; index<firstArr.length ; index++){
        if(index % 2 === 0){
            secondArr.push( firstArr[index] * firstArr[index+1]);
            
        }
    }
    for(let index = 0; index<secondArr.length ; index++){
        sum += secondArr[index];
        
    }

    return sum;

}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));