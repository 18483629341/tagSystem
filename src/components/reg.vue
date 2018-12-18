<template>
	<div class="my_l">
		<header class="top_bar">
		    <a onclick="window.history.go(-1)" class="icon_back"></a>
		    <h3 class="cartname">京东注册</h3>
		</header>
		<main class="user_login_box">
		    <div class="login_dialog">　
		        <div class="_username">
		            <input type="text" name="username" placeholder="请输入用户名" class="user_input" v-model="regName"/>
		        </div>
		        <div class="_username u_passwd">
		            <input type="password" name="password" placeholder="请输入密码" class="user_input" v-model="regPasswd"/>
		        </div>

		        <div class="login_box">
		            <a @click="goReg()" class="btn_login">注册/登录</a>
		        </div>
		    </div>
		</main>
	</div>
</template>
      

<script>
export default {
    data(){
        return{
            regName:'',
            regPasswd:'',
            showErr:false,
            showBlock:false,
            errMsg:'',
						canLogin:false
        }
    },
    mounted() {
	
        this.$store.dispatch('hideNav')  //下面导航的隐藏
           
	},
    destroyed() {
        this.$store.dispatch('showNav');
    },
    methods:{
        goReg(){
					 if(this.username ==''){
						alert("请输入用户名")
					}else if(this.password ==''){
						alert("请输入密码");
					}else{
							this.$http.post('/reg',{regName:this.regName,regPasswd:this.regPasswd})
													.then( 
														(res)=>{
															console.log(res);
															if(res.status==200){
																	if(res.statusText=="OK"){
																			alert(res.data.msg);
																			window.sessionStorage.userInfo = res.config.data;
																			this.$router.push('/');
																	}
															}else{alert('请求错误');}
														},
														(err)=>{alert(err);}
													)
					   }
			   	},
				

    }

    
}
</script>
<style >
    @import '../assets/css/reg.css';
</style>
