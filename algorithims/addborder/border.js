let input = document.getElementById("info").value;
let result = document.getElementById("result");
let butn = document.getElementById("button");


// const addborder = (array) => {
//     let length = array[0].length+2;
//     let stars='';

    

//     for(let i=0;i<length;i++){
//         stars = stars.concat("*");  
//     }
  

//     for(let j=0;j<=array.length;j++){
//         array[i]="*".concat(array[i],"*");
        
//     }

//     array.unshift(stars);
//     array.push(stars);
//     return array;
// };
function candies(n, m) {
    let max =0;
        for(let i=0;i<=m;i++){
            
            if(i%n===0){
                max=i;
                
            }
        }
        return max;
    }
    
  

butn.addEventListener('click',function(){
    alert(input);
    console.log(addborder(input));
     //result.innerText=addborder(input).toString();
});