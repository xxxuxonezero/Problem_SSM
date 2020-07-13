<template>
  <div id="app">
    <myHeader></myHeader>
    <myIndexContainer></myIndexContainer>
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

</style>
