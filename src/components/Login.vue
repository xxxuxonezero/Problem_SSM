<template>
  <div>
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
  </div>
</template>

<script>
  export default {
    name: "Login",
    data(){
      return{
        form:{
          username:'',
          password:'',
        },
        rules:{
          username:[
            {required:true,message:'请输入用户名',trigger:'blur'}
          ],
          password:[
            {required: true,message:'请输入密码',trigger:'blur'}
          ]
        }
      }
    },
    methods:{
       onSubmit:function (form) {
        this.$refs.form.validate((valid)=>{
          if(valid){
            this.$message({
              message:'登录成功',
              type:'success'
            })
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
  /*.myForm{*/
  /*  border: 1px solid #DCDFE6;*/
  /*  height: 200px;*/
  /*  width: 400px;*/
  /*  margin: auto;*/
  /*  margin-top: 200px;*/
  /*  padding: 50px 50px 20px 20px;*/
  /*  border-radius: 20px;*/
  /*  box-shadow: 5px 5px 0px #DCDFE6;*/
  /*}*/
  /*.myBtn{*/
  /*  float: right;*/
  /*}*/
</style>
