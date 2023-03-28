import { reqCartList, reqDeleteCart, reqUpdateCart } from "@/api";

const state = {
  cartList: []
};

const mutations = {
  GETCARTLIST(state, cartList) {
    state.cartList = cartList;
  }
};

const actions = {
  // 获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList();
    if (result.code == 200) {
      commit('GETCARTLIST', result.data)
    }
  },
  // 删除购物车某一产品
  async deleteCartList({ commit }, skuId) {
    let result = await reqDeleteCart(skuId);
    if (result.code == 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  // 修改购物车某一产品的选中状态
  async updateCart({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCart(skuId, isChecked);
    if (result.code == 200) {
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 删除全部勾选的产品
  deleteAllCheckedCart({ dispatch, getters }) {
    // context：小仓库，commit，mutations，getters，dispatch
    // 获取购物车所有产品（数组）
    let promiseAll = [];
    getters.cartList.cartInfoList.forEach((item) => {
      let promise = item.isChecked == 1 ? dispatch('deleteCartList', item.skuId) : '';
      // 将每次返回的Promise添加到数组里
      promiseAll.push(promise);
      // 只要全部p1|p2...都成功，返回结果都成功；只要有失败，则返回失败结果
      return Promise.all(promiseAll)
    });
  },
  // 修改全部产品全选状态
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      let promise = dispatch('updateCart', { skuId: item.skuId, isChecked });
      promiseAll.push(promise);
    });
    
    return Promise.all(promiseAll);
  }
};

const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
