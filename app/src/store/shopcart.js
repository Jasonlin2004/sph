import { reqCartList,reqDeleteCart,reqUpdateCart } from "@/api";

const state = {
  cartList:[]
};

const mutations = {
  GETCARTLIST(state,cartList){
    state.cartList = cartList;
  }
};

const actions = {
  // 获取购物车列表数据
  async getCartList({commit}){
    let result = await reqCartList();
    if(result.code == 200){
      commit('GETCARTLIST',result.data)
    }
  },
  // 删除购物车某一产品
  async deleteCartList({commit},skuId){
    let result = await reqDeleteCart(skuId);
    if(result.code == 200){
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  // 修改购物车某一产品的选中状态
  async updateCart({commit},{skuId,isChecked}){
    let result = await reqUpdateCart(skuId,isChecked);
    if(result.code == 200){
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
};

const getters = {
  cartList(state){
    return state.cartList[0] || {}
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
