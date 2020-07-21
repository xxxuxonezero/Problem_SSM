<template>
  <div class="show-problem-list">
      <problem-item v-for="item in pageList" :item="item" :key="item.id"></problem-item>
  </div>
</template>

<script>
  import ProblemItem from "./ProblemItem";

  export default {
    name: "ProblemList",
    components:{
      'problem-item':ProblemItem
    },
    props:[
      'pageList'
    ]
  }
</script>

<style scoped>
.show-problem-list{
  margin: 20px auto;
}
</style>
