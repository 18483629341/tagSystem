<template>
    <div>
      <CategoryHead></CategoryHead>
      <CategoryMain></CategoryMain>
    </div>
</template>

<script>
import CategoryHead from './categoryHead'
import CategoryMain from './categoryMain'
export default {
    data() {
        return {
            num:'12345'
        }
    },
    components:{
        CategoryHead,
        CategoryMain
    }
    
}
</script>
<style> 
@import '../assets/css/category.css';
</style>
