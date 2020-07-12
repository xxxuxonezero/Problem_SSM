<template>
  <div class="my-index">
    <el-container>
      <my-editor></my-editor>
    </el-container>
    <el-container>
      <my-trends-list></my-trends-list>
    </el-container>
  </div>

</template>

<script>
  import Editor from "./Editor";
  import TrendsList from "./TrendsList";
    export default {
        name: "IndexContainer",
      components:{
          'my-editor':Editor,
        'my-trends-list':TrendsList
      }
    }
</script>

<style scoped>
.my-index{
  margin-bottom: 20px;
  margin-top:20px;
  margin-left: 50px;
}
</style>
