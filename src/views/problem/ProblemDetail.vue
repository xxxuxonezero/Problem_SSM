<template>
  <div class="clearfix">
    <div class="left problem-detail">
      <div class="card">
        <div class="problem-type">
          <h2>单选</h2>
        </div>
        <div class="problem-content">
          <!--          <p v-text="question.content"></p>-->
          <p v-text="questionFormat[0]"></p>
          <ul>
            <li v-for="(item,index) in questionFormat" :key="index"
                v-if="index>0" v-text="item"></li>
          </ul>
        </div>
        <div class="problem-operation clearfix">
          <div class="left">
            <el-button type="primary" @click="showAnswer=!showAnswer">显示答案</el-button>
            <div class="show-answer" v-if="showAnswer">{{question.answer}}</div>
          </div>
          <div class="right center">
            <span class="operation-item" ><i class="iconfont-showcang"></i>收藏</span>
            <span class="operation-item"><i class="iconfont-showcang"></i>纠错</span>
            <span class="operation-item"><i class="iconfont-showcang"></i>收藏</span>
            <span class="operation-item"><i class="iconfont-showcang"></i>添加笔记</span>
          </div>
        </div>
        <div class="center">
          <span>调整难度系数：</span><el-rate></el-rate>
        </div>
      </div>
      <div>
        <comment-box style="width: 763px" :BtnCode="btnCode"></comment-box>
      </div>
      <div class="common-list">
        <comment-list :comments="comments"></comment-list>
      </div>
    </div>

    <div class="upload-author right card">
      <div class="author-info">
        <el-avatar :size="60" :src="author.avatar"></el-avatar>
        <span class="author center" v-text="author.username"></span>
      </div>
      <div style="padding: 10px">
        <span>上传时间：{{question.uploadTime}}</span>
      </div>
      <div>
        <el-rate v-model="question.difficulty" disabled
                 text-color="#909399"></el-rate>
      </div>
    </div>
  </div>

</template>

<script>
  import Comment from "@/components/problem/Comment";
  import Editor from "@/components/Editor"
  export default {
    name: "ProblemDetail",
    components:{
      'comment-list':Comment,
      'comment-box':Editor
    },
    methods: {
      getQuestion() {
        this.api.service({
          url: 'question/' + this.$route.params.id,
          method: 'get'
        })
          .then(resp => {
            this.question = resp.data
            this.author=resp.data.author
            this.questionFormat = resp.data.content.split('\n')
            console.log(resp.data);
          })
      },
      getComments(){
        this.api.service({
          url:'/quesComment/'+this.$route.params.id,
          method:'get',
        })
        .then(resp=>{
          this.comments=resp.data
          console.log(resp.data);
        })
      }
    },
    mounted() {
      this.getQuestion()
      this.getComments()
    },
    data() {
      return {
        question: {},
        questionFormat: {},
        showAnswer: false,
        value:5,
        avatarUrl:'',
        btnCode:2,
        loading:true,
        author:{},
        comments:{}
      }
    },
  }
</script>

<style scoped>
  .problem-detail {
    width: 800px;
    margin: 30px 100px;
    padding: 20px;
  }

  .upload-author {
    width: 300px;
    height: 200px;
    margin: 30px 100px 30px 0;
  }

  .card ul {
    list-style: none;
  }

  .card ui li {
    margin: 5px;
  }

  .problem-type {
    border-bottom: 1px solid #E4E7ED;
    padding: 10px;
  }

  .problem-content {
    padding: 10px;
  }

  .problem-operation {
    padding: 5px 10px 20px;
  }
  .upload-author span{
    font-size: 16px;
    font-family: "Arial Black";
  }
  .operation-item{
    font-size: 16px;
    padding:10px
  }
  .problem-operation .right{
    padding: 10px;
  }
  .common-list{
    margin-top: 70px;
  }
</style>
