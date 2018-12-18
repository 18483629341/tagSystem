<template>
  <div id="app">
  <NavTop />
    <router-view/>

    <!--<NavBottom  v-if="$store.state.isShowNav"/>-->
  </div>
</template>

<script>
import NavTop from './components/NavTop';
//import NavBottom from './components/NavBottom';
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
   // NavBottom,
    NavTop
  }
}
</script>

<style>
@import './assets/css/index.css'
</style>
