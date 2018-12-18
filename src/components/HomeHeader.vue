<template>
    <div class="home_h">
		 <header class="m_header">
                <div class="m_header_box" id="my_search">
                    <a href="#" class="icon_logo" onclick="window.history.go(-1)"></a>
                    <form action="#">
                        <span class="icon_search"></span>
                        <input type="search" class="search" placeholder="点击搜索" @click="goSearch()">
                    </form>
                    <router-link to="/login" class="logo_btn">登录</router-link>
                </div>
            </header>
	</div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods:{
       goSearch(){
           console.log('a');
            this.$router.push('/catgory');
        }
       
    }
}
</script>

