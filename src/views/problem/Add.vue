<template>
  <div class="add-box clearfix">
    <div class="right">
      <el-upload :accept="accept" ref="upload"
                 :action="uploadExcel"
                 :multiple=false
                 name="excel"
                 v-loading="loading"
                 :on-success="uploadList"
                 :show-file-list=false>
        <el-button type="primary" class="right">批量导入</el-button>
      </el-upload>
    </div>
    <h1>题目描述：</h1>
    <my-editor :BtnCode="3" @getContent="pro_content=$event">
    </my-editor>
    <h1>答案描述：</h1>
    <my-editor @getContent="answer_content=$event">
    </my-editor>
    <el-button type="primary">添加题目</el-button>
  </div>
</template>

<script>
  import Editor from '@/components/Editor'

  export default {
    name: "Add",
    components: {
      'my-editor': Editor
    },
    data() {
      return {
        pro_content: '',
        answer_content: '',
        accept: 'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        uploadExcel: '/api/user/question/addList',
        loading: false,
      }
    },
    methods: {
      uploadList(res) {
        console.log(res);
        this.loading = false
        if (res.status == 200) {
          this.$message.success('上传成功')
        } else {
          this.$message.error('上传失败')
        }

      }
    },
    computed: {
      userInfo() {
        return this.$store.getters.getUserInfo
      }
    }
  }
</script>

<style scoped>
  .add-box {
    width: 1000px;
    height: 900px;
    margin: 50px auto;
  }
</style>
