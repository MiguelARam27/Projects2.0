// Given a string, replace each its character by the next one in the English alphabet (z would be replaced by a).

// Example

// For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".

// Hints

// split()
// indexOf()
// join()
// Input/Output

// [time limit] 4000ms (js)
// [input] string inputString
// Non-empty string consisting of lowercase English characters.

// Guaranteed constraints:

// 1 ≤ inputString.length ≤ 10.

// [output] string
// The result string after replacing all of its characters.

let alphabeticShift = (string) =>{

    let emptyArr = [];

    for (let index = 0; index < string.length; index++) {
        if(string[index]==='z'){
            emptyArr.push('a');
        }else{
            emptyArr.push(String.fromCharCode(string.charCodeAt(index)+1));
        }
       
       
    }
    
   return emptyArr.join("");
    
}

console.log(alphabeticShift("crazy"))