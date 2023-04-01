// 登陆与注册模块
import { reqGetCode,reqUserRegister,reqUserLogin,reqUserInfo,reqLogout } from '@/api';
import {setToken,getToken,removeToken} from "@/utils/token";

const state = {
  code: "",  // 存放验证码
  token: getToken(), // 用户token
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
  },
  // 清除本地数据
  CLEAR(state){
    // 把仓库相关用户信息清空，本地存储清空
    state.token = "";
    state.userInfo = {};
    removeToken();
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
      commit("USERLOGIN",result.data.token); // 用户登录成功获取token
      setToken(result.data.token); // vuex不能持久化存储数据，所以保存在本地储存（持久化存储）
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
  },
  // 退出登录
  async userLogout({commit}){
    let result = await reqLogout(); // 只是向服务器发请求清除token，但本地用户信息也要清除
    // actions 不能直接操作state！提交到mutations里修改state
    if(result.code == 200) {
      commit("CLEAR");
      return "ok";
    } else {
      return Promise.reject(new Error('faile'));
    }
  },
  //
};

const getters = {};

export default {
  state,
  mutations,
  actions,
  getters
}