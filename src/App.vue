<template>
  <div id="app">
    <myHeader></myHeader>
    <myIndexContainer></myIndexContainer>
    <img src="http://localhost:8089/vertification" alt="">
    <myFooter></myFooter>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import IndexContainer from "./components/IndexContainer";
export default {
  name: 'App',
  components:{
    'myHeader':Header,
    'myFooter':Footer,
    'myIndexContainer':IndexContainer
  },
  created() {
    console.log(serverPort)
  }

}
</script>

<style>
  /*清除浮动*/
  .clearfix:after{
    content: '\200B';
    clear: both;
    display: block;
    height: 0px;
  }
  .clearfix{
     zoom: 1;
  }
  /*设置一个列表大小*/
  .my-box{
    padding: 10px;
    border:1px solid #DCDFE6;
    /*height: 200px;*/
    width: 1000px;
  }
  .right{
    float: right;
  }
  .left{
    float: left;
  }

</style>
