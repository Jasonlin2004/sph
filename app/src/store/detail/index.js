import { reqGoodsInfo } from "@/api";

const state = {
  goodInfo: {}
};

const mutations = {
  GETGOODSINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  }
};

const actions = {
  // 获取产品信息的action
  async getGoodInfo({ commit }, skuId) {
    const result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit('GETGOODSINFO', result.data);
    }
  }
};

// 简化数据而生
const getters = {
  categoryView(state){
    // 初始状态空对象
    return state.goodInfo.categoryView || {}; 
  },
  // 产品信息数据
  skuInfo(state){
    return state.goodInfo.skuInfo || {}; 
  },
  // 产品售卖属性变化
  spuSaleAttrList(state){
    return state.goodInfo.spuSaleAttrList || []; 
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}