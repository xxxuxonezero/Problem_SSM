<template>
  <div id="app">
    <myHeader></myHeader>
    <myIndexContainer></myIndexContainer>
    <myFooter></myFooter>
    <p>{{server}}</p>
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
  data() {
    return{
      server:this.api.server
    }
  }

}
</script>

<style>

</style>
