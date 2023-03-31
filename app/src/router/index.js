// 此文件用于配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./routes";
import store from '@/store';
// 使用插件
Vue.use(VueRouter);

// 先把VueRouter原型对象的push，先保存一份
// 先把VueRouter原型对象的replace，先保存一份
const orginPush = VueRouter.prototype.push;
const orginReplace = VueRouter.prototype.replace;

// 重写push | replace
// 第一个参数：告诉原来push方法，往哪里跳转（传递哪些参数）
VueRouter.prototype.push = function (location,resolve,reject) {
  if(resolve && reject){
    // call | apply区别：相同点，都可以调用函数一次，篡改函数上下文一次；不同点传递参数时，call用逗号隔开，apply传递数组
    orginPush.call(this,location,resolve,reject)
  } else {
    orginPush.call(this,location,()=>{},()=>{})
  }
};
VueRouter.prototype.replace = function (location,resolve,reject) {
  if(resolve && reject){
    // call | apply区别：相同点，都可以调用函数一次，篡改函数上下文一次；不同点传递参数时，call用逗号隔开，apply传递数组
    orginReplace.call(this,location,resolve,reject)
  } else {
    orginReplace.call(this,location,()=>{},()=>{})
  }
};

// 配置路由
const router = new VueRouter({
  routes,
  // 滚动行为
  scrollBehavior (to, from, savedPosition) {
    // y: 0滚动条最上方
    return {y:0}
  }
});

// 全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach(async (to,from,next)=>{
  // to：可以获取你要跳转到哪个路由
  // from：可以获取到你从哪个路由来的信息
  // next：放行函数  next()放行  next(path)放行到指定路由
  next();
  let token = store.state.user.token; // 用户登录才有token，未登录一定没有它
  let name = store.state.user.userInfo.name;
  if (token) {
    // 已登录不能进login【停留首页】
    if (to.path=="/login") {
      next("/home");
    } else {
      // 登录，去的不是login【home|search|detail|shopcart】
      // 如果有name有，放行；否则派发action
      try {
        await store.dispatch("getUserInfo"); // 获取用户信息，在首页展示
        next();
      } catch (error) {
        // token失效获取不到用户信息，清除所有用户信息
        await store.dispatch("userLogout");
        next("/login");
      }
    }
  } else {
    // 未登录时
    next();
  }
});

export default router;