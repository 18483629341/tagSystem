<template>
    <div class="home_n">
		<nav class="m_nav">
                <ul>
                    <li class="nav_item"  v-for="v in categorys">
                        <a href="#" class="nav_item_link">
                            <i class="iconfont" v-bind:class="v.icon"></i>
                            <span>{{v.title}}</span>
                        </a>
                    </li>
                 </ul>
		</nav>
     </div>
    <!--<div class="index-category">
        <div class="category" v-for="v in categorys"><i class="iconfont" v-bind:class="v.icon"></i><label>{{v.title}}</label></div>
  </div>-->
</template>

<script>
export default {
    //name:'testB',    //别名
    data() {
        return {
            categorys:[{'icon':'icon-shenghuo','title':'在线咨询'},
                        {'icon':'icon-jiaoyu','title':'产品介绍'},
                        {'icon':'icon-11','title':'活动动态'},
                        {'icon':'icon-jiazheng','title':'在线咨询'},
                        {'icon':'icon-jiajujiafang','title':'今日秒杀'},
                        {'icon':'icon-licai','title':'领取优惠'},
                        {'icon':'icon-11','title':'活动动态'},
                        {'icon':'icon-jiazheng','title':'在线咨询'},
                        {'icon':'icon-jiajujiafang','title':'今日秒杀'},
                        {'icon':'icon-licai','title':'领取优惠'}]
        }
    }
}
</script>

<style>

.m_nav .iconfont {
    /*border-radius: 50%;*/
    /*border: 3px solid #f9f9f9;*/
    /*box-shadow: 0px 0px 6px rgba(0,0,0,.5);*/
    color: #fff;
    background: #f60;
    padding: 10px;
    display: inline-block;
    border-radius: 10px;
}
.m_nav span {
    display:block;
}


</style>