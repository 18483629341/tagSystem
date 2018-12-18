<template>
  <div id="app">
    <router-view/>
    <NavBottom  v-if="$store.state.isShowNav"/>
  </div>
</template>

<script>
import NavBottom from './components/NavBottom';
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    NavBottom
  }
}
</script>

<style>
@import './assets/css/index.css'
</style>
