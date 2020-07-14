<template>
  <div>
  <!--         注册表单-->
  <el-dialog
    title="注册"
    :visible.sync="RegisterVisible"
    width="30%">
    <el-form ref="form" :rules="rules" :model="form" label-width="80px" >
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="vertify_code" >
        <el-input v-model="form.vertify_code" placeholder="请输入验证码" style="width: 55%"></el-input>
        <el-button round class="right" @click="sendEmail" :disabled="isDisabled" v-text="code_msg"></el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(form)" class="right">注册</el-button>
        <el-button @click="changeVisible">取 消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  </div>
</template>

<script>
  import formVerti from "../assets/js/form";

  let timer;
    export default {
      name: "Register",
      data(){
        return{
          form:formVerti.form,
          rules:formVerti.rules,
          isDisabled:false,
          code_msg:'发送验证码'
        }
      },
      props:[
        'RegisterVisible'
      ],
      methods:{
        changeVisible(){
          this.$emit('changeVisible',false)
          clearInterval(timer)
        },
        //发送验证码给邮箱，之后该按钮禁用1min
        sendEmail(){
          this.axios({
            url:'',
            method:'post',
            data:{
              email:this.form.email
            }
          })
          .then(resp=>{

          });
          //将按钮禁用1min
          // setTimeout()
          this.isDisabled=true
          let count=60;
          let _this=this
          timer=setInterval(function () {
            _this.code_msg='发送验证码'+--count+'s';
            if(count==0){
              clearInterval(timer)
              _this.isDisabled=false;
              _this.code_msg='发送验证码'
            }
          },1000)
        }
      }
    }
</script>

<style scoped>

</style>
