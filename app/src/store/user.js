// 登陆与注册模块
import { reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo } from '@/api';

const state = {
  code: "",  // 存放验证码
  token: "", // 用户token
  userInfo: {}
};

const mutations = {
  GETCODE(state, code) {
    state.code = code;
  },
  USERLOGIN(state, token){
    state.token = token;
  },
  GETUSERINFO(state,userInfo){
    state.userInfo = userInfo || {};
  }
};

const actions = {
  // 获取验证码
  async getCode({ commit }, phone) {
    // 获取接口，把验证码返回，实际情况是后台把信息发给手机
    let result = await reqGetCode(phone);
    if (result.code == 200) { 
      commit('GETCODE', result.data); 
      return 'ok';
    } else { 
      return Promise.reject(new Error('faile')); 
    }
  },
  // 注册
  async userRegister({commit},user){
    let result = await reqUserRegister(user);
    if(result.code == 200){
      return 'ok';
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  // 登录
  async userLogin({commit},data){
    let result = await reqUserLogin(data);
    if(result.code == 200) {
      commit("USERLOGIN",result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  // 获取用户信息
  async getUserInfo({commit}){
    let result = await reqUserInfo();
    if(result.code==200){
      commit("GETUSERINFO",result.data);
      return "ok";
    } else {
      return Promise.reject(new Error('faile'));
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