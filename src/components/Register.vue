<template>
  <div>
  <!--         注册表单-->
  <el-dialog
    title="注册"
    :visible.sync="RegisterVisible"
    :close-on-click-modal="false"
    :show-close="false"
    width="30%">
    <el-form ref="form" :rules="rules" :model="form" label-width="80px" status-icon>
      <el-form-item label="邮箱" prop="email" >
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
        <el-button type="primary" @click="onSubmit" class="right">注册</el-button>
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
        let _this=this
        //邮箱自定义校验规则：邮箱是否已注册
        let validateEmailExisted=(rule,value,callback)=>{
          _this.axios({
            url:this.api.server+'/isEmailExisted',
            method:'get',
            params:{
              email:_this.form.email
            }
          })
          .then(resp=>{
            if (resp.data == true) {
              callback(new Error("该邮箱已注册"))
            }else{
              callback()
            }
          })
        }
        formVerti.rules.email.push({validator:validateEmailExisted,trigger: 'blur'})
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
          //停止注册会话框中的倒计时
          clearInterval(timer)
          this.$refs.form.resetFields()
          this.form.email=''
          this.form.password=''
          this.form.vertify_code=''
        },
        //发送验证码给邮箱，之后该按钮禁用1min
        sendEmail(){
          this.axios({
            url:this.api.server+'/sendEmail',
            method:'get',
            params:{
              email:this.form.email
            }
          })
          //将按钮禁用1min
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
        },
        //注册
        onSubmit(){
          let _this=this
          _this.$refs.form.validate(valid=>{
            if (valid) {
              _this.axios({
                url:_this.api.server+'/register',
                method:'post',
                data:_this.api.transformData({email:_this.form.email,
                password:_this.form.password,vertify_code:_this.form.vertify_code})
              })
              .then(resp=>{
                if (resp.data == true) {
                  _this.$message({
                    type:'success',
                    message:'注册成功'
                  })
                  _this.changeVisible()
                }else{
                  _this.$message({type:'error',message:'注册失败'})
                }
              })
            }

          })
        }
      }
    }
</script>

<style scoped>

</style>
