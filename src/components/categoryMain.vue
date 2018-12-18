
<template>
    <main class="category_content">
      <CategoryLeft></CategoryLeft>
      <CategoryRight></CategoryRight>
    </main>
</template>

<script>
import CategoryLeft from './categoryLeft'
import CategoryRight from './categoryRight'
export default {
    data() {
        return {
            num:'12345'
        }
    },
    components:{
        CategoryLeft,
        CategoryRight
    }
}
</script>