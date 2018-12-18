<template>
    <div>
      <!-- <list></list>-->
      <MineHeader></MineHeader>
      <MineMain></MineMain>
    </div>
</template>

<script>
import list from './list'
import MineHeader from './MineHeader'
import MineMain from './MineMain'
export default {
    data() {
        return {
            isLogined:false
        }
    },
    beforeCreate() {
        
    },
    mounted() {
        window.sessionStorage.clear();
      
    },
    components: {
        list,
        MineHeader,
        MineMain
     
    }
}
</script>
<style >
    @import '../assets/css/mine.css';
</style>
