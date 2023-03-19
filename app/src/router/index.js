// 此文件用于配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from "./routes";
// 使用插件
Vue.use(VueRouter);

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
  routes,
  scrollBehavior (to, from, savedPosition) {
    // y: 0滚动条最上方
    return {y:0}
  }
})