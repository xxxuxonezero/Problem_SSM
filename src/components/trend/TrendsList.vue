<template>
  <div>
    <h2>动态列表</h2>
    <div class="my-show-list">
      <trend-item></trend-item>
    </div>
  </div>

</template>

<script>
  import TrendItem from "./TrendItem";
    export default {
        name: "TrendsList",
      data(){
          return{
            squareUrl:'',
            size:'medium',
            content:''
          }
      },
      components:{
          'trend-item':TrendItem
      }
    }
</script>

<style scoped>

</style>
