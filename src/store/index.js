import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);
const state={
	flag:"flag",
	count:"1",
	isShowNav:true,
	addCartDatas:[],
	total:0
}
//计算属性
var getters={
	count(state){
		return state.count
	},
	shownav(state){
		return state.isShowNav
	},
	cartDatas(state){
       return state.addCartDatas
	},
	total(state){
		//reduce()计算数组元素相加后的总和
        //累加器  money计算返回值   item当前元素  0传递给函数的初始值
		return  state.total=state.addCartDatas.reduce(function(sum,item){
			return  sum+item.product_uprice*item.goods_num
		},0)
	}
};
//管理mutations
const actions={
	abc:({commit,state})=>{
    commit('abc')//触发mutations中的abc方法
	},
	add:({commit,state})=>{
    commit('add')
	},
	del:({commit,state})=>{
    commit('del')
	},
	hideNav:({commit,state})=>{
    commit('hideNav')
	},
	showNav:({commit,state})=>{
    commit('showNav')
	},
	cartAdd:({commit,state},data)=>{
		commit('cartAdd',data)
	},
	delCart:({commit,state},id)=>{
		commit('delCart',id)
	},
	goodIncrement:({commit,state},id)=>{
		commit('goodIncrement',id);
	},
	goodDecrement:({commit,state},id)=>{
		commit('goodDecrement',id)
	}
	
}
//改变状态
const mutations={
	abc:(state)=>{
    state.flag='mutations'
	},
	add:(state)=>{
		state.count++;
	},
	del:(state)=>{
		state.count--;
	},
	hideNav:(state)=>{
		state.isShowNav=false;
	},
	showNav:(state)=>{
		state.isShowNav=true;
	},
	//添加数量
	goodIncrement:(state,id)=>{
		state.addCartDatas.filter(function(item){return item.product_id==id})[0].goods_num++;
		
	},
	goodDecrement:(state,id)=>{
		var decObject=state.addCartDatas.filter(function(item){return item.product_id==id;})[0];
		if(decObject&&decObject.goods_num>1){
		   state.addCartDatas.filter(function(item){return item.product_id==id;})[0].goods_num--;
		}else{
			return
		}
		
	},
	cartAdd:(state,data)=>{
		if(state.addCartDatas.length>0){
            var item=state.addCartDatas.filter(function(item){
				return item.product_id==data.product_id;
			})[0];
			console.log(item)
			if(item){
				item.goods_num=item.goods_num+data.goods_num;
			}else{
				state.addCartDatas.push(data);
			}
		}else{
			state.addCartDatas.push(data);
		}
	},
	delCart:(state,id)=>{
		var newData=state.addCartDatas.filter(function(item){
			return item.product_id!==id
		});
		state.addCartDatas=newData;
	}
	
};
const store=new vuex.Store({
	state,
	getters,
	actions,
	mutations
})
//导出store对象
export default store;

