import Vue from 'vue';
import Vuex from 'vuex';
// 使用插件
Vue.use(Vuex);

import home from './home';
import search from './search';

// 对外暴露store类的实例
export default new Vuex.Store({
  // 实现Vuex仓库模块式开发存储数据
  modules:{
    home,
    search
  }
})