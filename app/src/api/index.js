// 此模块对API进行统一管理
import requests from "./requests";
import mockRequests from './mockRequest';

// 三级联动接口
// api/product/getBaseCategoryList get 无参数
export const reqCategoryList = () => {
  // 调用此函数，就会发请求【axios返回结果是Promise对象，需要使用async和await】
  return requests({ url: '/product/getBaseCategoryList', method: 'get' })
}

// 获取banner数据
export const reqGetBannerList = () => mockRequests.get('/banner');

// 获取floor数据
export const reqGetFloorList = () => mockRequests.get('/floor');

// 获取搜索模块数据 /api/list post 参数：需要带参数（至少一个空对象）
export const reqGetSearchInfo = (params) => requests({url:'/list',method:'post',data:params})
