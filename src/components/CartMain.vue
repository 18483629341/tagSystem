<template>
		<main class="cart_box">
		    <div class="cart_tip clearfix" 
		        <span>登录后可同步电脑与手机购物车中的商品</span>
		        <a href="#" class="login" >登录</a>
		    </div>
		    <div class="cart_content clearfix" v-for="item in cartDatas" >
		        <div class="cart_shop clearfix">
		            <div class="cart_check_box">
		                <div class="check_box"> 

		                </div>
		            </div>
		            <div class="shop_info clearfix">
		                <img src="../assets/images/buy-logo.png" alt="" class="shop_icon">
		                <span class="shop_name">{{item.shop_name}}</span>
		            </div>
		            <div class="cart_free clearfix">
		                <span class="free_tip">优惠券></span>
		            </div>
		        </div>
		        <div class="cart_item">
		            <div class="cart_item_box">
		                <div class="check_box">

		                </div>
		            </div>
		            <div class="cart_detial_box clearfix">
		                <a href="#" class="cart_product_link">
		                    <img v-lazy="item.product_img_url" alt="">
		                </a>
		                <div class="item_names">
		                    <a href="#">
		                        <span>{{item.product_name}}</span>
		                    </a>
		                </div>
		                <div class="cart_weight">
		                    <i class="my_weigth">重量:0.45kg</i>
		                    <span class="my_color">颜色:AT800/16</span>
		                </div>
		                <div class="cart_product_sell">
		                    <span class="product_money">￥<strong class="real_money">{{item.product_uprice}}</strong>.00</span>
		                    <div class="cart_add clearfix">
		                        <span class="my_add" @click="goodIncrement(item.product_id)">+</span>
		                        <input type="tel" class="my_count" v-model="item.goods_num">
		                        <span class="my_jian" @click="goodDecrement(item.product_id)">-</span>
		                    </div>
		                </div>
		                <div class="cart_del clearfix" @click="showPop(item.product_id)">
		                    <div class="del_top" >
		                    </div>
		                    <div class="del_bottom">
		                    </div>
		                </div>
		            </div>
		        </div>
		      
		    </div>

		    <div class="pop" v-show="popStatus">
		    <div class="pop_box">
		        <div class="del_info">
		            确定要删除该商品吗？ 
		        </div>
		        <div class="del_cancel" @click="delCancel">
		            取消
		        </div>
		        <div class="del_ok" @click="delOk">
		            确定
		        </div>
		    </div>
		</div>

		</main>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'

export default {
    data() {
        return {
            popStatus:false,
			curId:0
        }
    },
	computed:mapGetters(['cartDatas']),//返回有关于 一个名为cartDatas的值
    mounted() {
        this.$store.dispatch('hideNav');
    },
	destroyed() {
		this.$store.dispatch('showNav');
	},
	watch:{
       
	},
    methods:{
		...mapActions(['goodIncrement','goodDecrement']),
		
		showPop(id){
           this.popStatus=true;
		   this.curId=id;
		},
		delCancel(){
			this.popStatus=false;
		},
		delOk(){
			this.$store.dispatch('delCart',this.curId);
			this.popStatus=false;
             
		}
	},   
	
    
}
</script>
