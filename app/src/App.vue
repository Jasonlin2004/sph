<template>
  <div id="app">
    <Header />
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- 在Home、Search显示，在Register、Login隐藏 -->
    <Footer v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  name: 'App',
  components: {
    Header,Footer
  },
  mounted() {
    // 通知Vuex发请求，获取数据，存储于仓库当中【在TypeNav发请求会多次耗费网络资源】
    this.$store.dispatch("categoryList");
  },
}
</script>

<style lang="less" scoped>
</style>
