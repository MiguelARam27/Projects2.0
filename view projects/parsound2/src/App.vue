<template>
  <div id="app">
    <div class="nav">
      <router-link to="/"></router-link>
      <router-link to="/about"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import About from './components/About.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
.nav{
  width:100%;
  height:20vh;
  position:fixed;
  color:blueviolet;
}
</style>
