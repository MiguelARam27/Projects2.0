<template>
  <div id="app">
  
   <Name>
     <h1 slot="title">I am the slot</h1>
     <p slot="text">hello</p>
   </Name>
  </div>
</template>

<script>
import Name from './components/Name.vue'


export default {
  name: 'app',
  components: {
    'Name':Name
  },
  data(){
    return{
      name:'miguel'
    }
  }
}
</script>

<style scope>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
