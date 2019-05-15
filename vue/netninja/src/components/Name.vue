<template>
    <div>
     
        <slot name="title"></slot>
        <h1>space</h1>
        <hr>
        <div>
            <slot name="text"></slot>
        </div>
    </div>
</template>
<script>
export default {


    data(){
        return{
            ninjas:['yoshi','mari','salt'],
            name:'salty'
        }
    }
}
</script>
<style scope>
    h2{
        color:blue;
    }
</style>