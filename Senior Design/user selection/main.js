let trial = document.getElementsByClassName("person");
// trial.addEventListener("click", function(){
// alert("it worked");
// });

for (let i = 0; i < trial.length; i++) {
    trial[i].addEventListener("click", function() {
      alert("clicked");
    });
  }
  