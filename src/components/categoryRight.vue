<template>
	<div id="cate_right">
		 <div class="category_right">
	            <div class="category_banner">
	                <a href="#">
	                    <img src="../assets/images/banner_1.png" alt="">
	                </a>
	            </div>
	            <div class="category_detail">
	                <h3 class="category_n">Hot Category Goods</h3>
	                <ul>
	                    <li class="category_detail_item" v-for="item in RightDatas">
	                        <router-link :to="'/detail/'+item.product_id"class="category_detail_item_link">
	                            <img v-lazy="item.product_img_url" alt="" class="category_detail_item_pic">
	                            <p class="category_detail_item_name">{{item.product_name}}</p>
	                        </router-link>
	                    </li>
	                
	                </ul>
	            </div>
	        </div> 
	</div>
</template>

<script>

export default {
    data() {
        return {
           RightDatas:[]
        }
    },
		mounted() {
			console.log("挂载一次")
			if(this.$route.params.id){
				this.getRDatas(this.$route.params.id);
		  }
		
		},
		updated() {   //不管用
			console.log("更新中");
		},
		watch:{//监听不建议大量使用
        	$route(to){
					console.log(to.path)
					var reg=/catgory\/\d+/;
					if(reg.test(to.path)){
						this.getRDatas(this.$route.params.id);
		  		}
			}
		},
		destroyed() {
			console.log("销毁一次")
		},
   methods:{
		 getRDatas(id){
			 this.$http.get('/categorygoods',{
				 params:{mId:id}
			 }).then((res)=>{
				 	console.log(res);
					if(res.status==200){
						this.RightDatas=res.data;
         	}
     		},(err)=>{
                console.log(err);
        }
			)
		 }
	 }
}
</script>