<template>
  <div class="my-box problem">
    <a @click="getProblem" style="cursor: pointer">{{item.description}}</a>
  </div>
</template>

<script>
  export default {
    name: "ProblemItem",
    props:['item'],
    methods:{
      getProblem(){
        let route=this.$router.resolve({
          path:this.$route.path+'/'+this.item.id,
        })
        window.open(route.href,'_blank')
      }
    }
  }
</script>

<style scoped>
  .problem {
    padding: 20px;
    margin: 0 auto;
  }
</style>
