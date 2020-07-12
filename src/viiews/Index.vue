<template>
  <myHeader></myHeader>
  <myIndexContainer></myIndexContainer>
  <myFooter></myFooter>
</template>

<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";
  import IndexContainer from "./components/IndexContainer";
    export default {
        name: "Index",
      components:{
        'myHeader':Header,
        'myFooter':Footer,
        'myIndexContainer':IndexContainer
      }
    }
</script>

<style scoped>

</style>
