<template>
  <div class="ui threaded comments">
    <h3 class="ui dividing header">Comments</h3>
    <div class="comment" v-for="(comment,index) in comments" :key="index">
      <a class="avatar">
        <img :src="comment.user.avatar">
      </a>
      <div class="content">
        <a class="author">{{comment.user.username}}</a>
        <div class="metadata">
          <span class="date">{{comment.uploadTime}}</span>
        </div>
        <div class="text" v-html="comment.content"></div>
        <div class="actions">
          <a class="reply">Reply</a>
        </div>
      </div>
      <div class="comments">
        <div class="comment" v-for="(reply,index) in comment.replies" :key="index">
          <a class="avatar">
            <img :src="reply.user.avatar">
          </a>
          <div class="content">
            <a class="author">{{reply.user.username}}</a>
            <div class="metadata">
              <span class="date">{{reply.uploadTime}}</span>
            </div>
            <div class="text">{{reply.content}}</div>
            <div class="actions">
              <a class="reply">Reply</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <form class="ui reply form">
      <div class="field">
        <textarea></textarea>
      </div>
      <div class="ui blue labeled submit icon button"><i class="icon edit"></i> Add Reply</div>
    </form>
  </div>
</template>

<script>
  import Editor from "@/components/Editor";

  export default {
    name: "Comment",
    components:{
      'my-editor':Editor
    },
    data(){
      return{
        parentComments:[]
      }
    },
    props:[
      'comments'
    ]
  }
</script>

<style scoped>

</style>
