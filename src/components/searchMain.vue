<template>
    <div class="search_page">
		<div class="h_layout">
	    	<div class="search_ma">
                <header class="top_bar">
                        <a onclick="window.history.go(-1)" class="icon icon_back"></a>
                        <form  class="goods_search">
                            <input type="search" class="goods_search_content" placeholder="搜索" v-model="keyword" @input="goSearch()">
                            <!-- <input type="search" class="goods_search_content" placeholder="搜索" v-model="keyword" @keyup.enter="goSearch($event)"> -->
                        </form>
                        <a href="#" class="icon icon_menu"></a>
                    </header>
                    <section class="search_condition">
                        <ul>
                            <li>
                                <span class="all">全部</span>
                                <em class="icon all_icon"></em>
                            </li>
                            <li>
                                <span @click="goSearch('hot')">销量</span>

                            </li>
                            <li class="p_price">
                                <span>价格</span>
                                <em class="icon price_up" @click="getByPriceUp()"></em>
                                <em class="icon price_down" @click="getByPriceDown()"></em>
                            </li>
                            <li>
                                <span>筛选</span>
                                <em class="saixuan"></em>
                            </li>
                        </ul>
                    </section>
                    <main class="main_goods_box">
                        <ul>
                            <li class="goods_item" v-for="item in mDatas">
                                <router-link :to="'/detail/'+item.product_id" class="goods_item_link">
                                    <img v-lazy="item.product_img_url" alt="" class="goods_item_pic">
                                    <div class="goods_right">
                                        <div class="pp_name">
                                            <span>
                                                {{item.product_name}}
                                            </span>
                                        </div>
                                        <div class="price_box">
                                            <span>￥</span>
                                            <span>{{item.product_uprice}}</span>
                                            <span>.00</span>
                                        </div>
                                        <div class="pinglun_box">
                                            <span>{{item.product_comment_num}}条评价</span>
                                            <span>{{item.shop_name}}</span>
                                        </div>
                                    </div>
                                </router-link>
                            </li>
                        
                        </ul>
                    </main>
                </div>
		</div>
	</div>
</template>

<script>
export default {
    data() {
        return {
            keyword:'',
            mDatas:[]
        }
    },
    methods:{
        goSearch(type,priceUp,priceDown){
            let _this = this;
            if(_this.keyword =='') return;
            _this.$http.get('/search',{
                params:{
                     kw: _this.keyword,
                     hot:type ? type :'',
										 priceUp:priceUp?priceUp:'',
										 priceDown:priceDown?priceDown:''
                }
            }).then((res)=>{
                console.log(res.data)
                _this.mDatas = res.data;
            },(err)=>{
                console.log(err);
            })
        }
				/*getByPriceUp(){
					 goSearch('','priceUp','');
				}
				getByPriceDown(){
					 goSearch('','','priceDown');
				}*/
    }
}
</script>

<style >
	@import '../assets/css/searchpage.css'
</style>