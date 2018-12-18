<template>
	<div class="my_l">
		<header class="top_bar">
		    <a onclick="window.history.go(-1)" class="icon_back"></a>
		    <h3 class="cartname">京东登录</h3>
		</header>
		<main class="user_login_box">
		    <div class="login_dialog">　
		        <div class="_username">
		            <input type="text" name="username" placeholder="请输入用户名" class="user_input" v-model="username"/>
		        </div>
		        <div class="_username u_passwd">
		            <input type="password" name="password" placeholder="请输入密码" class="user_input" v-model="password"/>
		        </div>

		        <div class="login_box">
		            <a @click="goLogin()" class="btn_login">登录</a>
		        </div>
		        <div class="go_reg_box">
		            <router-link tag="span" to="/register">快速注册</router-link>
		        </div>
		    </div>
		</main>
	</div>
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:'',
            userInfo:{}
        }
    },
    methods:{
        //进行校验
        goLogin(){
				if(this.username ==''){
					alert("请输入用户名")
				}else if(this.password ==''){
					alert("请输入密码");
				}else {
					this.$http.post('/login',{
						loginName:this.username,
						loginPawd:this.password
					}).then((res)=>{
						if(res.status==200){
							this.userInfo = res.data;
							if(this.userInfo.status ==1){
								window.sessionStorage.userInfo = JSON.stringify(this.userInfo);
								this.$router.push('/');
							}else{
								alert(this.userInfo.msg);
							}
						}else {
							alert('请求错误');
						}
					},(err)=>{
						console.log(err);
					})
				}
			}
    }
}
</script>

<style>
@import '../assets/css/login.css';
</style>