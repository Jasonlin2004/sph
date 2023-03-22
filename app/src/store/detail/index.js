import { reqGoodsInfo,reqAddOrUpdataShopCart } from "@/api";

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
  },
  // 将产品添加到购物车
  async addOrUpdataShopCart({commit},{skuId,skuNum}){
    const result = await reqAddOrUpdataShopCart(skuId,skuNum);
    // 当前这个函数如果执行返回Promise
    // 代表服务器加入购物车成功
    if(result.code==200){
      return 'ok'
    } else {
      // 代表加入购物车失败
      return Promise.reject(new Error('faile'));
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