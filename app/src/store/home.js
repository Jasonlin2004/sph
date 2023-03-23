// home模块的小仓库

import { reqCategoryList, reqGetBannerList, reqGetFloorList } from "@/api";

const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
};

const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  }
};

const actions = {
  // 通过api里接口函数调用，像服务器发请求，获取服务器的数据
  async categoryList({ commit }) {
    const result = await reqCategoryList();
    if (result.code == 200) {
      commit('CATEGORYLIST', result.data); // 参数一：mutation的名字，参数二：带过去的值
    }
  },
  // 首页轮播图 ListContainer
  async getBannerList({ commit }) {
    const result = await reqGetBannerList();
    if (result.code == 200) {
      commit('GETBANNERLIST', result.data);
    }
  },
  // 家用电器 Floor
  async getFloorList({ commit }) {
    const result = await reqGetFloorList();
    if (result.code == 200){commit('GETFLOORLIST', result.data);} 
  }
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters
}