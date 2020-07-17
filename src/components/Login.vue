<template>
  <div>
    <!--          登录表单-->
    <el-dialog
      title="登录"
      :visible.sync="LoginVisible"
      :show-close="false"
      :close-on-click-modal="false"
      width="30%">
      <el-form ref="form" :rules="rules" :model="form" label-width="80px" >
        <el-form-item label="邮箱" prop="email" >
          <el-input v-model="form.email" placeholder="请输入邮箱"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="vertify_code" >
          <el-input v-model="form.vertify_code" placeholder="请输入验证码" style="width: 70%"></el-input>
          <img :src="vertify_img" alt="" @click="changeImg">
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit(form)" class="right">登录</el-button>
          <el-button @click="changeVisible">取 消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>

</template>

<script>
  const imgUrl='/api/vertification'
  export default {
    name: "Login",
    data(){
      return{
        vertify_img:imgUrl,
        form:{
          email:'',
          password:'',
          vertify_code:''
        },
        rules:{
          email:[
            {required:true,message:'请输入邮箱',trigger:'blur'},
            {type:'email',message: '请输入正确的邮箱',trigger: 'blur'}
          ],
          password:[
            {required: true,message:'请输入密码',trigger:'blur'},
            {min:6,max:12,message: '请输入8-12位密码',trigger: 'blur'}
          ],
          vertify_code: [
            {required:true,message:'请输入验证码',trigger:'blur'},
            {min:4,max:4,message: '请输入4位验证码',trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      onSubmit:function (form) {
        let vm=this
        this.$refs.form.validate((valid)=>{
          if(valid){
            let data={'email':vm.form.email,'password':vm.form.password,'code':vm.form.vertify_code}
            vm.axios({
              url: '/login',
              baseURL: vm.api.server,
              method:'post',
              data:vm.api.transformData(data)
            })
            .then(resp=>{
              if(resp.data==''){
                vm.$message({
                  message:'登录成功',
                  type:'success'
                })
                vm.changeVisible()
              }
              else{
                vm.$message({
                  message: resp.data,
                  type:'error'
                })
                vm.changeImg()
              }
            })
          }else{
            this.$message({
              message:'请输入用户名密码',
              type:'error'
            })
            this.changeImg()
          }
        })
      },
      changeImg:function () {
        this.vertify_img=imgUrl+'?'+new Date()
      },
      //因为在子组件中无法改变父组件中传过来的值，所以选择把要修改的值传给父组件，再由父组件重新传过来
      changeVisible(){
        this.$emit('changeVisible',false)
      },
    },
    props:['LoginVisible'],

  }
</script>

<style scoped>

</style>
