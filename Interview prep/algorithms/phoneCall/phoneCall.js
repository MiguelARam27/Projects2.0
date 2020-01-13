// Some phone usage rate may be described as follows:

// first minute of a call costs min1 cents,
// each minute from the 2nd up to 10th (inclusive) costs min2_10 cents
// each minute after 10th costs min11 cents.
// You have s cents on your account before the call. What is the duration of the longest call (in minutes rounded down to the nearest integer) you can have?

let phoneCall = (min1,min2_10,min10up,money) =>{
    let total;
    money - min1 <=0 ? total = 0: money-=min1, total=1;
    money
    for (let index = 0; index<9; index++) {
        
        money - min2_10 <= 0 ? index = 10: money -= min2_10,total++;
        money
    }

    while(money !== 0 || money>=0){
        money -= min10up, total++;
    }
    
    

    return total

}


console.log(phoneCall(3,1,2,20))
