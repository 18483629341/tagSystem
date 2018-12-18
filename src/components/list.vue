<template>
    <div class="index-category">
        <div class="category" v-for="v in categorys"><i class="iconfont" v-bind:class="v.icon"></i><label>{{v.title}}</label></div>
        <testB :data="a"></testB>
  </div>
</template>

<script>
import testB from './testB'
export default {
    //name:'testB',    //别名
    data() {
        return {
            categorys:[{'icon':'icon-shenghuo','title':'在线咨询'},
                        {'icon':'icon-jiaoyu','title':'产品介绍'},
                        {'icon':'icon-11','title':'活动动态'},
                        {'icon':'icon-jiazheng','title':'在线咨询'},
                        {'icon':'icon-jiajujiafang','title':'今日秒杀'},
                        {'icon':'icon-licai','title':'领取优惠'}],
            a:"变量a"         
        }
    },
    components: {
        //HelloWorld
        //testB
    }
}
</script>

<style>
/*index-category*/
.index-category {
    margin-top: 5%;
}
.index-category .category {
    width: 50%;
    float:left;
    text-align:center;
}
.index-category .category .iconfont {
    font-size: 40px;
    display:inline-block;
    padding: 10%;
    border-radius: 50%;
    color:#fff;
    border: 3px solid #f9f9f9;
    box-shadow: 0px 0px 6px rgba(0,0,0,.5);
}
.index-category .category:nth-child(1) .iconfont{
    background: #f95730;
}
.index-category .category:nth-child(2)  .iconfont{
    background: #fa69b9;
}
.index-category .category:nth-child(3)  .iconfont{
    background: #49dacf;
}
.index-category .category:nth-child(4)  .iconfont{
    background: #908cfd;
}
.index-category .category:nth-child(5)  .iconfont{
    background: #92d85c;
}
.index-category .category:nth-child(6)  .iconfont{
    background: #ecbe35;
}
.index-category .category label {
    display: block;
    padding: 10% 0;
    color: #999;
}
/*index-category end*/

</style>