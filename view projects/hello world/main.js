new Vue({
    el:'.app',
    data:{
        title:'Hello world!'
    },
    methods:{
        changeName: function(event){
            this.title = event.target.value;
        }
    }
});