// Check whether the given string is a subsequence of the plaintext alphabet.

// Example

// For s = "effg" or s = "cdce", the output should be alphabetSubsequence(s) = false

// For s = "ace" or s = "bxz", the output should be alphabetSubsequence(s) = true.

// Hints

// size property
// charCodeAt()
// Input/Output

// [execution time limit] 5 seconds (ts)
// [input] string s
// Guaranteed constraints:

// 2 ≤ s.length ≤ 15.

// [output] boolean

// true if the given string is a subsequence of the alphabet, false otherwise.


const almostAlphabet = (string) =>{

    let counter = 0;
    
    for (let index = 0; index < string.length-1; index++) {
        if(string.charCodeAt(index+1)>string.charCodeAt(index)  ){

           
            counter++;
        }else{
            return false
        }
        console.log(counter);
    }

    return counter > 0
}

console.log(almostAlphabet("effg"))
console.log(almostAlphabet("ace"))
console.log(almostAlphabet("bhp"))