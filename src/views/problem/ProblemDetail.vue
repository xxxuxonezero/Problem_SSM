<template>
  <div class="clearfix">
    <div class="problem-detail left card">
      <div class="problem-type">

      </div>
      <div class="problem-content">
        <p v-text="question.content"></p>
        <p v-text="questionFormat[0]"></p>
        <ul>
          <li v-for="(item,index) in questionFormat" :key="index"
              v-if="index>0" v-text="item"></li>
        </ul>
      </div>
      <div class="problem-operation">

      </div>
    </div>
    <div class="upload-author right card">
        <span class="author" v-text="question.authorName"></span>
    </div>
  </div>

</template>

<script>
  export default {
    name: "ProblemDetail",
    methods:{
      getQuestion(){
        this.api.service({
          url:'question/'+this.$route.params.id,
          method:'get'
        })
        .then(resp=>{
          this.question=resp.data
          console.log(resp.data);
        })
      }
    },
    mounted() {
      this.getQuestion()
    },
    data(){
      return{
        question:{}
      }
    },
    computed:{
      questionFormat(){
        let q=this.question.content.split('\n')
        return q;
      }
    }
  }
</script>

<style scoped>
  .problem-detail {
    width: 800px;
    margin: 30px 100px;
    padding: 20px;
  }
  .problem-detail ul li{
    text-decoration: none;
  }
  .upload-author{
    width: 300px;
    height: 200px;
    margin: 30px 100px 30px 0;
  }
</style>
