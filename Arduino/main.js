let result = document.getElementById("data");
result.querySelector
let url = "https://api.thingspeak.com/channels/627229/fields/1.json?api_key=TKH1S71E8OPNDMTU&results=300";
let time_updated="";

result.addEventListener("mouseover", function(){
// result.innerHTML="ha";
    fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(writedata)
    .then(displayErrors)
// getdata();
});

//Going to perform get requests every 1 second. 
// setInterval(function(){alert("hello");},1000);

function handleErrors(res){
    if(!res.ok){
        throw Error(res.status);
    }
    return res;
}
function parseJSON(res){
    return res.json().then(function(parseddata){
        console.log(parseddata);
        console.log(parseddata.feeds.length);
        return parseddata

    })
};

function writedata(data){
     for(let i =0;i<data.feeds.length;i++){
        result.innerHTML+= "ID is.. " + data.feeds[i].entry_id + "   DATA: "+data.feeds[i].field1+"<br>";
     }
     
    // time_updated = data
}

function displayErrors(err){
    console.log(err);
 }
