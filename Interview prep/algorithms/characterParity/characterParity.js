// Given a character, check if it represents an odd digit, an even digit or not a digit at all.

// Example

// For symbol = '5', the output should be characterParity(symbol) = "odd";
// For symbol = '8', the output should be characterParity(symbol) = "even";
// For symbol = 'q', the output should be characterParity(symbol) = "not a digit".
// Hints

// isNaN()
// parseInt()
// Input/Output

// [execution time limit] 5 seconds (ts)
// [input] char symbol
// [output] string


let characterParity = (character) =>{
    parseInt(character)
    if(isNaN(character)){
        return "not a digit"
    }
    else if(character%2===0){
        return "even"
    }else{
        return "odd"
    }
}



console.log(characterParity('a'));
console.log(characterParity('2'));
console.log(characterParity('3'));