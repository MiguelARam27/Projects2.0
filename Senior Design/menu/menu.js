let menu_icon =document.getElementById('MenuIcon');
let menu = document.getElementById('MainMenu');
let close_button= document.getElementById('close');

function showmenu(){
    menu_icon.style.display="none";
    menu.style.left='0px';
    menu.style.clipPath='polygon(0 0,100% 0,100% 100%,0% 100%)';
}

function hidemenu(){
    menu_icon.style.display="block";
    menu.style.left="-300px";
    menu.style.clipPath="polygon(0 0,0% 0,100% 100%,0% 100%)";
}

//menu icon clicked to bring up menu
menu_icon.addEventListener('click',function(){ 
    setTimeout(showmenu,100);
});

//"close" img clicked to close menu
close_button.addEventListener('click',function(){
    setTimeout(hidemenu,100);
});


document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    let coll = document.querySelectorAll('.collapsible');
    let instanc = M.Collapsible.init(coll);
    var instances = M.Carousel.init(elems);

  });

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.carousel');
//     var instances = M.Carousel.init(elems);
//   });
// $(document).ready(function(){
//     //Init Carousel
//     // alert("hello");
//     $('.carousel').carousel();
// });



