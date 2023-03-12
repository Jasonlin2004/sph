// 引入mockjs模块
import Mock from 'mockjs';
// 引入json文件 webpack默认对外暴露有：图片、JSON数据格式
import banner from './banner.json';
import floor from './floor.json';

// mock数据：参数一请求地址，参数二请求数据
Mock.mock('/mock/banner',{code:200,data:banner}); // 模拟首页大轮播图
Mock.mock('/mock/floor',{code:200,data:floor}); // 模拟家用电器