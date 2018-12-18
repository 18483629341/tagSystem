<template>
	<div id="cate_left">
		 <div class="category_left">
	            <ul class="childbox">
	                <li :class="{active:item.flag}" v-for="(item,i) in leftDatas"  @click="lichange(item,i)">
	                	<router-link :to="'/catgory/'+item.category_id">
	                		{{item.category_name}}
	                	</router-link>
	                </li>
	               
	            </ul>
	        </div>
	</div>
</template>
<script>

export default {
    data() {
        return {
           leftDatas:[],
					 active:"active"
        }
    },
    mounted() {
			this.getcategdoryLists();
		},
	methods:{
			
		getcategdoryLists(){
				 
				this.$http.get('/category').then((res)=>{
					if(res.status==200){
						this.leftDatas=res.data.reverse();
						for(let i=0;i<this.leftDatas.length;i++){
							this.$set(this.leftDatas[i],'flag',false)
						}
						console.log(this.leftDatas);
        	}
     	},(err)=>{
                console.log(err);
        }
			)
			
	},
	lichange(item,j){

				for(let i=0;i<this.leftDatas.length;i++){
						if(i==j){
							this.$set(this.leftDatas[i],'flag',true)
						}else{
							this.$set(this.leftDatas[i],'flag',false)
						}
					}
				
			
			}
	}
			
	
}
</script>
<style>
.category_content .category_left ul li.active {
    background: #f60;
}
</style>