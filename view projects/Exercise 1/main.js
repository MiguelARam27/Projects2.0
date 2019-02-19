
// new Vue({
//     el:"#excercise",
//     data:{
//         name:"mig",
//         age:"30"
//     }

// });

new Vue({
    el: '#app',
    data: {
        x:0,
        y:0
    },
    methods: {
    update: function(event){
        this.x =event.clientX;
        this.y =event.clientY;
    },
    alertMe: function(){
        alert("you");
    }
    
 
    }
});