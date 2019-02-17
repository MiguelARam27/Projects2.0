let background = document.getElementsByTagName("body");
let buttons = document.querySelectorAll("button");
let theme0btn = document.getElementById("theme0");
let theme1btn = document.getElementById("theme1");
let theme2btn = document.getElementById("theme2");
let theme3btn = document.getElementById("theme3");
let theme4btn = document.getElementById("theme4");
let theme5btn = document.getElementById("theme5");
let test = document.getElementById("test");



document.addEventListener("DOMContentLoaded", function(event) {
    localStorage.theme="0";
    alert("yo");
  
});

if(localStorage.theme===0){
    background[0].style.background="blue";
    alert("hello");
}


