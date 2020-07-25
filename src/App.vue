<template>
  <div id="app">
    <myHeader></myHeader>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import IndexContainer from "./components/IndexContainer";
import Trend from "./views/trend/Trend";
export default {
  name: 'App',
  components:{
    'myHeader':Header,
    'myFooter':Footer,
    'myIndexContainer':IndexContainer,
    'trend':Trend
  },
  data() {
    return{
      server:this.api.server
    }
  },
  methods:{
  },
  computed:{
  }

}
</script>

<style>
  .el-rate__icon{
    font-size: 40px;
  }
  .el-rate{
    height: auto;
    text-align: center;
    margin: 10px auto;
  }
  .ql-editor{
    height: 200px;
  }
</style>
