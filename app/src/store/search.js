import { reqGetSearchInfo } from '@/api';

// search模块的小仓库
const state = {
  searchList: {},
};

const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  }
};

const actions = {
  // 获取search模块数据
  async getSearchList({ commit }, params) {
    // reqGetSearchInfo 这个函数在调用获取服务器数据的时候至少传递一个参数，至少是空对象
    // params形参：用户派发action时发来的，默认空对象
    const result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit('GETSEARCHLIST', result.data);
    }

  }
};

// 计算属性，在项目当中时为了简化数据而生
// 可以把在组件中需要的数据简化【将来组件在获取数据会方便】
const getters = {
  // state是当前仓库的state
  goodList(state) { return state.searchList.goodsList || [] }, // 没有网的时候，可能返回空数据
  trademarkList(state) { return state.searchList.trademarkList || [] },
  attrsList(state) { return state.searchList.attrsList || [] },
};

export default {
  state,
  mutations,
  actions,
  getters
}