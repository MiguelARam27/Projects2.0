// Given two cells on the standard chess board, determine whether they have the same color or not.

// Example

// For cell1 = "A1" and cell2 = "C3", the output should be chessBoardCellColor(cell1, cell2) = true.
// ;

// For cell1 = "A1" and cell2 = "H3", the output should be chessBoardCellColor(cell1, cell2) = false.


// Hints

// parseInt()
// Input/Output

// [time limit] 4000ms (js)
// [input] string cell1
// [input] string cell2
// [output] boolean
// true if both cells have the same color, false otherwise.

let chessBoardCellColor = (cell1,cell2) =>{

    let piece1 = [...cell1];
    let piece2 = [...cell2];

    console.log(color(piece1))
    console.log(color(piece2))

    

}


let color = (piece)=>{
    if(piece[0]==='A'||piece[0]==='C'||piece[0]==='E'||piece[0]==='G'){
        if(parseInt(piece[1])%2!==0){
            return true
        }else{
            return false
        }
    }else{
        if(parseInt(piece[1])%2!==0){
            return true
        }else{
            return false
        }
    }
}

console.log(chessBoardCellColor("A1","B2"))