复习:重点
1:swiper|lodash|moment插件工作的时候经常使用----【API：有时间翻看一下】
2:$nextTick,组件实例的方法。
在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。



1)合并参数*****
为什么需要合并参数（query|params）:因为这些参数，对于search是有用的，因为search通过这些参数
向服务器发请求，需要把这些参数携带给服务器，服务器就会返回相应的用户的搜索的数据，search就可以进行展示。

1.1:开发的三级联动业务，当你点击a标签的时候，会进行路由的跳转，将产品的名字与id传递给search模块----（query）
1.2:点击搜索按钮的时候，用户输入进来的关键字，点击按钮的时候会通过params参数传递给search模块-----（params）
1.3路由跳转（home->search）,两个地方，三级联动（typeNav）、Header组件（搜索按钮）

getters:计算属性，简化数据而生
商品列表、平台售卖属性已经动态数据（来自服务器）





2)完成search静态组件
项目节点:学习的并不是基础的语法，'套路'
再次提醒：组件通信很重要-----【七种组件通信：务必要会】
接下来开发search搜索模块：注意在老师给你们的文件夹中有search静态组件，复制过来即可。
2.1书写静态页面【布局、样式】
2.2拆分组件
2.3获取服务器数据展示数据
2.4玩业务

//是搜索模块需要携带给接口的参数
{
  "category1Id": "61",//一级分类的id
  "category2Id": "61",//二级分类的id
  "category3Id": "61",//三级分类的id
  "categoryName": "手机",//产品的名字
  "keyword": "小米",//关键字
  "order": "1:desc",//排序
  "pageNo": 1,//当前第几页
  "pageSize": 10,//每一页需要展示多少条数据
  "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],//平台属性的选择参数
  "trademark": "4:小米"//品牌参数
}

注意：搜索的接口，需要传递参数，至少是一个空对象（KV没有，但是至少给服务器一个对象）
3)获取search模块数据
4)展示商品列表数据





5)根据用户的搜索条件展示不同的数据。

根据前台传递参数决定的
根据不同条件，展示不同的数据。----->取决于后台返回的数据


1:发请求，获取搜索模块的数据
2:根据用户搜索的条件携带参数给服务器，展示用户搜索的内筒



开发遇见问题:用户条件可以发生多次变化，但是咱们的请求，只是会发一次【mounted中书写的】


请求的性能优化:
发一个请求，需要向服务器携带参数：带100个参数   带1参数  【消耗宽带】
对于给服务器携带的参数：如果数值为undefind，向服务器发请求的时候，参数步携带给服务器的




6)面包屑的业务完成

当面包屑关键字清除以后，需要让兄弟元素Header组件中的关键字清除
涉及组件通信：
  props：父子，
  自定义事件：子父，
  vuex：万能
  插槽：父子
  pubsub-js：少用
  $bus：万能





































