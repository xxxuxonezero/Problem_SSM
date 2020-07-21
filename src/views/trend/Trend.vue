<template>
  <div class="clearfix">
    <div class="my-index left">
      <el-container>
        <my-editor></my-editor>
      </el-container>
      <el-container>
        <my-trends-list></my-trends-list>
      </el-container>
    </div>
    <!--v-if="isLogin"-->
    <div class="user_info right">
      <el-card class="user_info_card">
        <div class="user_info_header center">
          <el-avatar shape="circle" :size="60"
          class="user_info_avatar left"
          :src="avatarUrl"></el-avatar>
          <span class="username">{{user.username}}</span>
          <br>
          <br>
          <span>已经连续登录{{user.loginDays}}天</span>
        </div>
        <div class="user_info_body center">
          <a class="user_item" @click="">上传题目数 <span>{{user.uploadProNum}}</span></a>
          <a class="user_item">动态&nbsp;&nbsp;<span>{{user.trendNum}}</span></a>
        </div>
      </el-card>
    </div>
  </div>

</template>

<script>
  import Editor from "@/components/Editor";
  import TrendsList from "@/components/trend/TrendsList";
  export default {
    name: "Trend",
    components:{
      'my-editor':Editor,
      'my-trends-list':TrendsList
    },
    data(){
      return{
        avatarUrl:'',
        user:{
          username:'xxx',
          loginDays:10,
          uploadProNum:12,
          trendNum:5
        }
      }
    },
    computed:{
      isLogin(){
        return this.$store.state.isLogin
      }
    },
    methods:{
      //获取用户信息
      getUserInfo(){

      }
    }
  }
</script>

<style scoped>
  .my-index{
    margin-bottom: 20px;
    margin-top:20px;
    margin-left: 50px;
  }
  .user_info{
    margin: 40px 80px 5px 5px;
  }
  .user_info_card{
    height: 200px;
    width:300px;
  }
  .user_info_header{
    margin-bottom: 20px;
  }
  span.username{
    font-size: 16px;
    font-family: "Arial Black";
  }
  .user_item{
    display: inline-block;
    line-height: 60px;
    font-size: 20px;
    text-decoration: none;
    margin:-1px 5px;
    color: black;
    font-family: 黑体;
    cursor: pointer;
  }
  .user_item span{
    color: dimgrey;
  }
</style>
