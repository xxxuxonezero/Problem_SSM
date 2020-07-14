export default {
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
      {min:8,max:12,message: '请输入8-12位密码',trigger: 'blur'}
    ],
    vertify_code: [
      {required:true,message:'请输入验证码',trigger:'blur'},
      {min:4,max:4,message: '请输入4位验证码',trigger: 'blur'}
    ]
  },


}
