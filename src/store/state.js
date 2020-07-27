const state={
  LoginVisible:false,
  RegisterVisible:false,
  isLogin:localStorage.getItem("isLogin")? localStorage.getItem("isLogin") : false,
  userInfo:localStorage.getItem("userInfo")? localStorage.getItem("userInfo") : null,
  token:''
}

export default state
