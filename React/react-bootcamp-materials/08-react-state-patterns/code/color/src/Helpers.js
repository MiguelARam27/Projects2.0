function choice(arr){
    let randomColor =Math.floor(Math.random()*arr.length);
    return arr[randomColor];
}

export {choice}