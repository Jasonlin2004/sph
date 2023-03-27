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

// 获取产品详情页 /api/item/{ skuId } get 参数：产品id
export const reqGoodsInfo = (skuId) => requests({url:`/item/${skuId}`, method:'get'})

// 将产品添加到购物车，或更新购物车某个产品的个数 /api/cart/checkCart/{skuID}/{skuNum}
export const reqAddOrUpdataShopCart = (skuId,skuNum) => requests({url: `/cart/addToCart/${skuId}/${skuNum}`, method:'post'})

// 获取购物车列表数据接口 /api/cart/cartList GET
export const reqCartList = () => requests({url: '/cart/cartList', method:'get'})

// 删除购物车产品接口 /api/cart/deleteCart/{skuId} DELETE
export const reqDeleteCart = (skuId) => requests({url:`/cart/deleteCart/${skuId}`, method:'delete'})

// 修改商品选中状态 /api/cart/checkCart/{skuID}/{isChecked} GET
export const reqUpdateCart = (skuId,isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`, method:'get'})