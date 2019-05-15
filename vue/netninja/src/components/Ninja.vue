<template>
    <div>
        <slot name="title"></slot>
        <h1> {{name}}</h1>
        <h2 v-for="i in ninjas" :key="i">{{i}}</h2>
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