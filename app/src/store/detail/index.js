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
  async getGoodInfo({ commit }, skuId) {
    const result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit('GETGOODSINFO', result.data);
    }
  }
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}