// 引入路由组件
// import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
import Detail from "@/pages/Detail";
// import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
// import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/MyOrder";
import GroupOrder from "@/pages/Center/GroupOrder";

/* 
  当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
  如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。
*/
/* const home = () => {
  return import("@/pages/Home");
} */


// 路由配置信息
export default[
  // 重定向，在项目跑起来的时候，访问/，立马让他定到首页
  {
    path:'*',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import("@/pages/Home"), // 路由懒加载
    meta:{showFooter:true}
  },
  {
    path:'/detail/:skuid',
    component:()=>import("@/pages/Detail"),
    meta:{showFooter:true}
  },
  {
    path:'/addcartsuccess',
    name:'addcartsuccess',
    component:()=>import("@/pages/AddCartSuccess"),
    meta:{showFooter:true}
  },
  {
    path:'/shopcart',
    component:()=>import("@/pages/ShopCart"),
    meta:{showFooter:true}
  },
  {
    path:'/pay',
    component:()=>import("@/pages/Pay"),
    meta:{showFooter:true},
    beforeEnter:(to,from,next)=>{
      if(from.path=="/trade") next();
      else next(false);
    }
  },
  {
    path:'/paysuccess',
    component:()=>import("@/pages/PaySuccess"),
    meta:{showFooter:true},
    
  },
  {
    path:'/center',
    component:()=>import("@/pages/Center"),
    meta:{showFooter:true},
    children:[
      {
        path:'myorder',
        component:()=>import("@/pages/Center/MyOrder")
      },
      {
        path:'grouporder',
        component:()=>import("@/pages/Center/GroupOrder")
      },
    ]
  },
  {
    path:'/trade',
    component:()=>import("@/pages/Trade"),
    meta:{showFooter:true},
    // 路由独享守卫
    beforeEnter: (to,from,next)=>{
      // 去交易页，必须从购物车而来
      if(from.path=="/shopcart") next();
      else next(false); // 从其他地方来停留当前页
    }
  },
  {
    name:'search',
    path:'/search/:keyword?',
    component:()=>import("@/pages/Search"),
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
    component:()=>import("@/pages/Login")
  },
  {
    path:'/register',
    component:()=>import("@/pages/Register")
  },
]