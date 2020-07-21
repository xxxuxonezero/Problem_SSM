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

</style>
