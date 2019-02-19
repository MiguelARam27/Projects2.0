new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods:{
            button: function(){
                alert("you clicked the button");
            },
            input1: function(event){
                this.value = event.target.value;
            }

        }
    });