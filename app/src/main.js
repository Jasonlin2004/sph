import Vue from 'vue';
import App from './App.vue';
// 三级联动组件---全局组件
import TypeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';

Vue.component(TypeNav.name,TypeNav); // 参数一：组件名字；参数二：哪一个组件
Vue.component(Carousel.name,Carousel);
// 引入路由
import router from '@/router';
// 引入仓库
import store from '@/store';
// 引入mock
import '@/mock/serve'; // mock当中serve.js需要执行一次
// 引入swiper样式（引入一次全局生效，不用一值调用）
import 'swiper/css/swiper.min.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由 注册路=路由信息，组件身上都会有 $route 和 $router 属性
  router,
  // 引入仓库，组件身上都会有 $store 属性
  store
}).$mount('#app')
