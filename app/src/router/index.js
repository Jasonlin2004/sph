// 此文件用于配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Search from '@/pages/Search';
// 先把VueRouter原型对象的push，先保存一份
// 先把VueRouter原型对象的replace，先保存一份
const orginPush = VueRouter.prototype.push;
const orginReplace = VueRouter.prototype.replace;

// 重写push | replace
// 第一个参数：告诉原来push方法，往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function(location,resolve,reject) {
  if(resolve && reject){
    // call | apply区别：相同点，都可以调用函数一次，篡改函数上下文一次；不同点传递参数时，call用逗号隔开，apply传递数组
    orginPush.call(this,location,resolve,reject)
  } else {
    orginPush.call(this,location,()=>{},()=>{})
  }
}
VueRouter.prototype.replace = function   (location,resolve,reject) {
  if(resolve && reject){
    // call | apply区别：相同点，都可以调用函数一次，篡改函数上下文一次；不同点传递参数时，call用逗号隔开，apply传递数组
    orginReplace.call(this,location,resolve,reject)
  } else {
    orginReplace.call(this,location,()=>{},()=>{})
  }
}

// 配置路由
export default new VueRouter({
  routes:[
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
})