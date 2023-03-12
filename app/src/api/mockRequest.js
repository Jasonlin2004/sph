// 这里对axios进行二次封装
import axios from 'axios';
// 进度条
import nProgress from 'nprogress';  // start：进度条开始；done：进度条结束
// 进度条样式
import 'nprogress/nprogress.css';

// 1、利用axios的方法create，创建一个axios的实例
// 2、request就是axios，只不过可以稍微配置一下
const requests = axios.create({
  // 配置对象
  baseURL:'/mock', // 基础路径，发请求的时候路径会出现api【此处可以忽略，但后面请求就得加上/api】
  timeout:5000 // 请求超时时间

})

// 请求拦截器：发请求之前可以检测到，做一些事情
requests.interceptors.request.use((config)=>{
  // config：配置对象，对象里面有个Header请求头，很重要
  nProgress.start();
  return config;
})

// 响应拦截器：当服务器数据返回之后可以处理一些事情
requests.interceptors.response.use((res)=>{
  nProgress.done();
  return res.data;
},(err)=>{
  return Promise.reject(new Error('faile'));
})

// 对外暴露
export default requests;
