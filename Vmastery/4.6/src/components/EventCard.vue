<template>
    <div>
        <span>@{{event.time}} on {{ event.date}}</span>
        <h4>{{title}}</h4>
        <span>{{event.attendees.length}}: are attending</span>
    </div>
</template>
<script>
export default {
    data(){
        return{
            event:{
                id:1,
                title:'Beach Cleanup',
                date:'Tues Aug 19,2018',
                time: '6:00',
                attendees:[
                    { id: 'abc123', name: 'Salt'},
                    { id: 'def456', name:'mike'}    
                ]
            }
        }
    }
    
}
</script>

<style scoped>
h4{
    color:blue;
}
</style>
