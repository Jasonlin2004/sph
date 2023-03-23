// 引入路由组件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Detail from "@/pages/Detail";
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from "@/pages/ShopCart";

// 路由配置信息
export default[
  // 重定向，在项目跑起来的时候，访问/，立马让他定到首页
  {
    path:'*',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    meta:{showFooter:true}
  },
  {
    path:'/detail/:skuid',
    component:Detail,
    meta:{showFooter:true}
  },
  {
    path:'/addcartsuccess',
    name:'addcartsuccess',
    component:AddCartSuccess,
    meta:{showFooter:true}
  },
  {
    path:'/shopcart',
    component:ShopCart,
    meta:{showFooter:true}
  },
  {
    name:'search',
    path:'/search/:keyword?',
    component:Search,
    meta:{showFooter:true},
    // 路由组件能不能传递prop参数

    // 布尔值写法：params
    props:true,
    // 对象写法：额外给路由传递一些props
    // props:{a:1,b:2}
    // 函数写法：可以params、query参数通过props传递给路由组件
    /* props: $route=>{
      return {keyword:$route.params.keyword,k:$route.query.k}
    } */
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
]