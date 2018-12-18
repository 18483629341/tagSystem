import Home from './components/Home'
import Category from './components/Category'
import Find from './components/Find'
import Cart from './components/Cart'
import Mine from './components/Mine'
import GoodsDetail from './components/GoodsDetail'  //详情
import SearchMain from './components/SearchMain'   //搜索
import Login from './components/Login'   //搜索
import Reg from './components/reg'
export default [
    {
        path:'/home',
        component:Home
    },{
        path: '/',
        redirect: '/home'
    }, {
        path: '*',
        redirect: '/home'
    },{
        path:'/catgory',
        component:Category
    },
    {
        path:'/catgory/:id',
        component:Category
    },{
        path:'/find',
        component:Find
    },{
        path:'/cart',
        component:Cart
    },{
        path:'/mine',
        component:Mine
    },{
        path:'/detail/:id',
        component:GoodsDetail
    },{
        path:'/search',
        component:SearchMain
    },{
        path:'/login',
        component:Login
    },{
        path:'/register',
        component:Reg
    }
]