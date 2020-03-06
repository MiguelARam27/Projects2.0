// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Example

// chunkyMonkey(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// chunkyMonkey([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// Hints

// slice()



let chunkyMonkey = (arr,size)=>{
    let copy = [...arr];
    
    let start = 0;
    let start2 = size;
    empty =[];
    for (let index = 0; index < arr.length; index+=size) {
        
        empty.push(copy.slice(start,start2))
        start+=size;
        start2+=size;
    }
    

    return empty

}


console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4))


