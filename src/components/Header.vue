<template>
  <nav class="ui inverted attached segment m-padded-tb-mini">
    <div class="ui container">
      <div class="ui inverted secondary menu">
        <h2 class="ui teal header item">onezero</h2>
        <a href="" class="item">首页</a>
        <el-dropdown>
          <a href="" class="item">题库</a>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>试题广场</el-dropdown-item>
            <el-dropdown-item>专项练习</el-dropdown-item>
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
                <el-dropdown-item>退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <a href="" class="item">发帖</a>
          </div>
          <div class="m-login" v-else>
            <a class="item" @click="LoginVisible=true">登录</a>
            <a href="" class="item">注册</a>
          </div>
<!--          登录表单-->
          <el-dialog
            title="注册"
            :visible.sync="LoginVisible"
            width="30%">
            <el-form ref="form" :rules="rules" :model="form" label-width="80px" >
              <el-form-item label="邮箱" prop="email">
                <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit(form)" class="right">登录</el-button>
                <el-button @click="LoginVisible = false ">取 消</el-button>
              </el-form-item>
            </el-form>
          </el-dialog>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import Login from "./Login";
    export default {
        name: "Header",
      data() {
        return {
            isLogin:false,
          LoginVisible:false,
          form:{
            email:'',
            password:'',
          },
          rules:{
            email:[
              {required:true,message:'请输入邮箱',trigger:'blur'},
              {type:'email',message: '请输入正确的邮箱',trigger: 'blur'}
            ],
            password:[
              {required: true,message:'请输入密码',trigger:'blur'},
              {min:8,max:12,message: '请输入8-12位密码',trigger: 'blur'}
            ]
          }
        };
      },
      components:{
        'my-login':Login
      },
      methods: {
        onSubmit:function (form) {
          let vm=this
          this.$refs.form.validate((valid)=>{
            if(valid){
              // vm.axios({
              //   url:''
              // })
              this.$message({
                message:'登录成功',
                type:'success'
              })
              this.LoginVisible=false
            }else{
              this.$message({
                message:'请输入用户名密码',
                type:'error'
              })
            }
          })
        }

      }
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
