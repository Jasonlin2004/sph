<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>尚品汇欢迎您！</p>
          <p>
            <span>请</span>
            <!-- 声明式导航 -->
            <router-link to="/login">登录</router-link>
            <router-link href="###" class="register" to="/register">免费注册</router-link>
          </p>
        </div>
        <div class="typeList">
          <a href="###">我的订单</a>
          <a href="###">我的购物车</a>
          <a href="###">我的尚品汇</a>
          <a href="###">尚品汇会员</a>
          <a href="###">企业采购</a>
          <a href="###">关注尚品汇</a>
          <a href="###">合作招商</a>
          <a href="###">商家后台</a>
        </div>
      </div>
    </div>
    <!--头部第二行 搜索区域-->
    <div class="bottom">
      <h1 class="logoArea">
        <router-link class="logo" title="尚品汇" to="/home">
          <img src="./images/logo.png"/>
        </router-link>
      </h1>
      <div class="searchArea">
        <form action="###" class="searchForm">
          <input
            type="text"
            id="autocomplete"
            class="input-error input-xxlarge"
            v-model="keyword"
          />
          <button class="sui-btn btn-xlarge btn-danger" type="button" @click="goSearch">
            搜索
          </button>
        </form>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      keyword:'',
    }
  },
  methods: {
    // 搜索按钮回调函数，需要向Search路由进行跳转
    goSearch(){
      // 路由传参
      // 第一种：字符串拼接
      // this.$router.push('/search/' +  + "?k=" + this.keyword.toUpperCase());
      // 第二种：模板字符串
      // this.$router.push(`/search/${this.keyword}?k=${this.keyword.toUpperCase()}`);
      // 第三种：对象写法
      // this.$router.push({name:'search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}})

      /* ********************************************************************* */
      // 面试题一：路由传递参数（对象写法）path是否可以结合params参数一起使用?
      // 路由跳转传参时，对象写法是可以name、path形式，但path这种写法不能根params参数一起使用，必须结合name
      // this.$router.push({path:'/search',params:{keyword:this.keyword},query:{k:this.keyword.toUpperCase()}})

      // 面试题二：如何指定params参数可传可不传? 
      // 如果路由要求传递params参数但不传，会出现url问题，在配置路由的时候在path后面加上？，代表可传可不传
      // this.$router.push({name:'search',query:{k:this.keyword.toUpperCase()}});

      // 面试题三：params参数可以传递也可以不传递，但是如果传递是空串，如何解决？
      // 使用undefined解决params参数可以传递、不传递（空的字符串）
      // this.$router.push({name:'search',params:{keyword:'' || undefined},query:{k:this.keyword.toUpperCase()}})

      // 面试题四：路由组件能不能传递props数据？
      // 有三种

      // 如果有query参数一起带过去
      if(this.$route.query){
        const location = {name:'search',params:{keyword:this.keyword || undefined}};
        location.query = this.$route.query;
        this.$router.push(location);
      }
    }
  },
};
</script>

<style lang="less" scoped>
.header {
  & > .top {
    background-color: #eaeaea;
    height: 30px;
    line-height: 30px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }

    .searchArea {
      float: right;
      margin-top: 35px;

      .searchForm {
        overflow: hidden;

        input {
          box-sizing: border-box;
          width: 490px;
          height: 32px;
          padding: 0px 4px;
          border: 2px solid #ea4a36;
          float: left;

          &:focus {
            outline: none;
          }
        }

        button {
          height: 32px;
          width: 68px;
          background-color: #ea4a36;
          border: none;
          color: #fff;
          float: left;
          cursor: pointer;

          &:focus {
            outline: none;
          }
        }
      }
    }
  }
}
</style>