import Vue from 'vue';
import Vuex from 'vuex';
// 使用插件
Vue.use(Vuex);

import home from './home';
import search from './search';
import detail from "./detail";
import shopcart from "./shopcart";
import user from './user';
import trade from './trade';

// 对外暴露store类的实例
export default new Vuex.Store({
  // 实现Vuex仓库模块式开发存储数据
  modules:{
    home,
    search,
    detail,
    shopcart,
    user,
    trade
  }
});