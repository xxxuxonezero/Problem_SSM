<template>
  <nav class="ui inverted attached segment m-padded-tb-mini">
    <div class="ui container">
      <div class="ui inverted secondary menu">
        <h2 class="ui teal header item">onezero</h2>
        <a class="item" @click="$router.push('/trend')">首页</a>
        <el-dropdown>
          <a class="item" @click="$router.push('/problem')">题库</a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item><a @click="$router.push('/problem/problemground')">试题广场</a></el-dropdown-item>
            <el-dropdown-item><a @click="$router.push('/problem/practice')">专项练习</a></el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <a href="" class="item">视频</a>
        <a href="" class="item">讨论区</a>
        <div class="right item">
          <div class="ui icon inverted transparent input">
            <input type="text" placeholder="搜索...">
            <i class="search link icon"></i>
          </div>
          <div class="m-login" v-if="isLogin">
            <el-dropdown>
              <span class="el-dropdown-lis item">
                <img src="../assets/img/EXo9mSKU0AABu2E.jpeg" alt="" class="circle-img">
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>我的收藏</el-dropdown-item>
                <el-dropdown-item>我的错题</el-dropdown-item>
                <el-dropdown-item>个人信息</el-dropdown-item>
                <el-dropdown-item>我的动态</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <a href="" class="item">发帖</a>
          </div>
          <div class="m-login" v-else>
            <a class="item" @click="changeLoginVisible">登录</a>
            <a class="item" @click="RegisterVisible=true">注册</a>
          </div>
          <my-login></my-login>
          <my-register :register-visible="RegisterVisible" @changeVisible="RegisterVisible=$event"></my-register>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import Login from "./Login";
  import Register from "./Register";

    export default {
        name: "Header",
      data() {
        return {
          isLogin:false,
          LoginVisible:false,
          RegisterVisible:false,
        }
      },
      components:{
        'my-login':Login,
        'my-register':Register
      },
      methods: {
        changeLoginVisible(){
          this.$store.commit('changeLoginVisible',true)
        }
      },
    }
</script>

<style scoped>
  .m-padded-tb-mini{
    padding-bottom: 0.2em !important;
    padding-top:0.2em !important;
  }
  .m-login{
    display: flex;
    margin-left: 30px;
  }
  .circle-img{
    width: 40px;
    height: auto;
    border-radius: 10rem;
  }


</style>
