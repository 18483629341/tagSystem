<template>
    <div class="banner">
        <img v-for="(v,i) in data" v-show="i==num" :src="v"/>
        <div class="banner-circle">
            <ul>
                <li v-for="(v,i) in data" :class="{selected:i==num}"></li>  
            </ul> 
        </div>
    </div>
</template>

<script>
export default {
    name:'banner',    //别名
    props:['data'],
    data() {
        return {
            num:0,      //当前轮播
        }
    },
    methods:{     //方法
        autoPlay:function(){
            this.num ++;
            if(this.num == this.data.length){   //已经是最后一张
                this.num = 0;
            }
        },
        play:function(){
            setInterval(this.autoPlay,2000)
        }
    },
    mounted:function(){   //挂载完成   生命周期
        this.play();

        
    }
}
</script>

<style>
ul {
    list-style-type:none;
}
body {
    font-size: 14px;
    background: #fff;
    overflow-y:scroll;
    overflow-x:hidden;
}


/*index*/
.banner ,.home_n{
    position: relative;
    max-width:720px;
    margin:0 auto;
}
.banner .banner-circle {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    color: #fff;
}
.banner .banner-circle li{
    display:inline-block;
    background: rgba(0,0,0,.3);
    border-radius: 50%;
    padding:5px;
    margin:2px;
}
.banner .banner-circle ul {
    text-align: center;
}
.banner .banner-circle .selected {
    background: rgba(0,0,0,.8);
}
.banner img {
    width: 100%;
    margin: 0;
    padding: 0;
}
</style>