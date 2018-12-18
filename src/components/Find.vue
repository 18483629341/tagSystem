<template>
    <div>
       find 
       <h1>{{$store.state.flag}}</h1>
       <h1>{{count}}</h1>
       <button @click="$store.dispatch('abc')">action</button>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
    data() {
        return {
            
        }
    },
    computed:mapState(['count','flag'])
}
</script>
