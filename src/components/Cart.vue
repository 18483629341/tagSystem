<template>
    <div>
       <CartHeader></CartHeader>
       <CartMain></CartMain>
        <CartFooter></CartFooter>
    </div>
</template>

<script>
import CartHeader from './CartHeader'
import CartMain from './CartMain'
import CartFooter from './CartFooter'
export default {
    components:{
        CartHeader,
        CartMain,
        CartFooter

    }
    
    
    
}
</script>
<style >
    @import '../assets/css/cart.css';
</style>