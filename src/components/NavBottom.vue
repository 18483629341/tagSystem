<template>
  <div class="footer">
  	<footer class="fixBottomBox"> 
        <ul @click="changeIcon()">
            <router-link tag="li" to="/home" class="tabItem" >
            	<a href="javascript:;" class="tab-item-link">
                    <img :src="imageObject.homeImg" alt="" class="tab-item-icon">
                </a>
            </router-link>
            <router-link tag="li" to="/catgory" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <img :src="imageObject.catgoryImg" alt="" class="tab-item-icon">
                </a>
            </router-link>
            <router-link tag="li" to="/find" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <img :src="imageObject.findImg" alt="" class="tab-item-icon">
                </a>
            </router-link>
            <router-link tag="li" to="/cart" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <img :src="imageObject.cartImg" alt="" class="tab-item-icon">
                </a>
            </router-link>
            <router-link tag="li" to="/mine" class="tabItem">
                <a href="javascript:;" class="tab-item-link">
                    <img :src="imageObject.meImg" alt="" class="tab-item-icon">
                </a>
            </router-link>
        </ul>
    </footer>
  </div>
</template>
<script>
    export default {
        data(){
            return{
                allImageObject:{
                    homeImg:[require('../assets/images/a-home.png'),require('../assets/images/n-home.png')],
                    catgoryImg:[require('../assets/images/a-catergry.png'),require('../assets/images/n-catergry.png')],
                    findImg:[require('../assets/images/a-find.png'),require('../assets/images/n-find.png')],
                    cartImg:[require('../assets/images/a-cart.png'),require('../assets/images/n-cart.png')],
                    meImg:[require('../assets/images/a-me.png'),require('../assets/images/n-me.png')],
                },
               imageObject:{
                   homeImg:null,
                   catgoryImg:null,
                    findImg:null,
                    cartImg:null,
                    meImg:null,
               }

               
            }
        },
        mounted() {
            // console.log(this.$route.path);
            this.initIcon();
        },
        destroyed() {
            //console.log(this.$route.path);
           // this.initIcon();
        },
        methods:{
            changeIcon(){
                this.initIcon();
                 console.log(this.$route.path);
            },
          initIcon(){
              var _this=this;
              var path=_this.$route.path;
            if(path=='/catgory'){
                for(var i  in _this.allImageObject){
                    if(i=='catgoryImg'){
                         _this.imageObject[i]=this.allImageObject[i][0];
                    }else{
                        _this.imageObject[i]=this.allImageObject[i][1];
                    }
                }
            }else if(path=='/find'){
                for(var i  in _this.allImageObject){
                    if(i=='findImg'){
                         _this.imageObject[i]=this.allImageObject[i][0];
                    }else{
                        _this.imageObject[i]=this.allImageObject[i][1];
                    }
                }
            }else if(path=='/cart'){
                for(var i  in _this.allImageObject){
                    if(i=='cartImg'){
                         _this.imageObject[i]=this.allImageObject[i][0];
                    }else{
                        _this.imageObject[i]=this.allImageObject[i][1];
                    }
                }
            }else if(path=='/mine'||path=='/login'){
                for(var i  in _this.allImageObject){
                    if(i=='meImg'){
                         _this.imageObject[i]=this.allImageObject[i][0];
                    }else{
                        _this.imageObject[i]=this.allImageObject[i][1];
                    }
                }
            }else{
                for(var i  in _this.allImageObject){
                    if(i=='homeImg'){
                         _this.imageObject[i]=this.allImageObject[i][0];
                    }else{
                        _this.imageObject[i]=this.allImageObject[i][1];
                    }
                }
            
            }
          }
        }
    }
</script>

<style >
   	@import '../assets/css/navBottom.css'
</style>
