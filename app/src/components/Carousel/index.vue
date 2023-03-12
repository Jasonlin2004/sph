<template>
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(carousel, index) in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  name: "Carousel",
  props:['list'],
  watch: {
    // 第一次写轮播图，因为在组件内部发请求、动态渲染结构【要等服务器返回】
    // 下载因为父组件给子组件通过props传递数据，结构有了的情况下执行mounted
    list: {
      // 立即监听：不管数据有没有变化，上来立即监听
      immediate: true,
      handler() {
        // 只能监听到有数据，但v-for动态渲染结构还是没有办法确定，因此需要nectTick
        this.$nextTick(() => {
          var mySwiper = new Swiper(".swiper-container", {
            //设置轮播图防线
            direction: "horizontal",
            //开启循环模式
            loop: true,
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //分页器类型
              type: "bullets",
              //点击分页器，切换轮播
              clickable: true,
            },
            //自动轮播
            autoplay: {
              delay: 3000,
              //新版本的写法：目前是5版本
              // pauseOnMouseEnter: true,
              //如果设置为true，当切换到最后一个slide时停止自动切换
              stopOnLastSlide: true,
              //用户操作swiper之后，是否禁止autoplay
              disableOnInteraction: false,
            },
            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            //切换效果
            // effect: "cube",
          });
        });
      },
    },
  },
};
</script>

<style>
</style>