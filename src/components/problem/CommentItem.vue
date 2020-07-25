<template>
  <div class="comment">
    <a class="avatar">
      <img src="/images/avatar/small/elliot.jpg">
    </a>
    <div class="content">
      <a class="author">Elliot Fu</a>
      <div class="metadata">
        <span class="date">昨天上午12:30</span>
      </div>
      <div class="text">
        <p>這對我的研究是非常有用.謝謝!</p>
      </div>
      <div class="actions">
        <a class="reply">Reply</a>
      </div>
    </div>
    <div class="comments">
      <div class="comment">
        <a class="avatar">
          <img src="/images/avatar/small/jenny.jpg">
        </a>
        <div class="content">
          <a class="author">Jenny Hess</a>
          <div class="metadata">
            <span class="date">刚刚</span>
          </div>
          <div class="text">艾略特你永远是多么正确 :)</div>
          <div class="actions">
            <a class="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "CommentItem"
    }
</script>

<style scoped>

</style>
