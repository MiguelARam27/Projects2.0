// Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be checkPalindrome(inputString) = true;
// For inputString = "abac", the output should be checkPalindrome(inputString) = false;
// For inputString = "a", the output should be checkPalindrome(inputString) = true.
// Hints

// toLowerCase()
// split()
// reverse()
// join()
// Input/Output

// [time limit] 4000ms (js)
// [input] string inputString
// A non-empty string consisting of lowercase characters.

// Guaranteed constraints:

// 1 ≤ inputString.length ≤ 105.

// [output] boolean

// true if inputString is a palindrome, false otherwise.

let checkPalindrome = (word) =>{

    let copy = [...word];
    copy.reverse();
    let emptyArr = [];
    copy.map(letter => emptyArr.push(letter) );
    emptyArr = copy.join('');
    if(emptyArr === word){
        return true
    }else return false


}
console.log(checkPalindrome("aabbaa"))
console.log(checkPalindrome("aabbac"))

