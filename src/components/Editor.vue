<template>
<div>
    <el-upload class="img-uploader"
               :action="serverUrl"
               name="img"
               :accept="accept"
               :show-file-list="false"
               :on-success="uploadSuccess"
               :on-error="uploadError"
               :before-upload="beforeUpload">
    </el-upload>
    <quill-editor ref="myQuillEditor" v-model="content"
                  :options="editorOption" class="my-editor" />
     <div class="my-submit-btn">
       <el-button type="primary" @click="submit">发布动态
       </el-button>
     </div>

 </div>

</template>

<script>
  import {quillRedefine} from 'vue-quill-editor-upload'
  const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],  // toggled buttons
    [{'header': 1}, {'header': 2}],    // custom button values
    [{'list': 'ordered'}, {'list': 'bullet'}],
    [{'indent': '-1'}, {'indent': '+1'}],   // outdent/indent
    [{'direction': 'rtl'}],       // text direction
    [{'size': ['small', false, 'large', 'huge']}], // custom dropdown
    [{'header': [1, 2, 3, 4, 5, 6, false]}],
    [{'color': []}, {'background': []}],   // dropdown with defaults from theme
    [{'font': []}],
    [{'align': []}],
    ['link', 'image'],
    ['clean']
  ]
    export default {
        name: "Editor",
      data(){
          return {
            quillUpdateImg:false,//不显示loading动画
            content: '',
            src:'',
            port:'http://localhost:8089',
            editorOption: {
              theme: 'snow', // or 'bubble'
              modules: {
                toolbar: {
                  container: toolbarOptions,
                  handlers: {
                     image: function (value) {
                      if (value) {
                        // 触发input框选择图片文件
                        document.querySelector('.img-uploader input').click()
                      } else {
                        this.quill.format('image', false);
                      }
                    }
                  }
                }
              }
            },
            serverUrl:'/api/img/upload',
            accept: 'image/png, image/gif, image/jpeg, image/bmp, image/jpg'
          }
      },
      methods:{
          submit:function () {

          },
        uploadSuccess:function (resp,file) {
          console.log(file)
          let port='http://localhost:8089'
          if(resp.code==200){
            let quill=this.$refs.myQuillEditor.quill;
            console.log(quill)
            //获取光标位置
            let length=quill.getSelection().index;
            alert(resp.url)
            // let url=port+resp.url
            // this.src=port+url
            quill.insertEmbed(length,'image','api'+resp.url)
            // quill.setSelection(length+1)
          }else{
            this.$message.error("加载失败...")
          }
          this.quillUpdateImg=false

        },
        uploadError:function () {
          this.$message.error("加载失败...")
          this.quillUpdateImg=false
        },
        beforeUpload:function (file) {
          this.quillUpdateImg=true
        },
        onEditorChange:function ({editor,html,text}) {
            console.log(html)
            this.content=html
        }
      },

    }
</script>

<style scoped>
  .my-editor{
    height: 200px;
    width: 1000px;
  }
  .my-submit-btn{
    float: right;
    margin-top: 50px;
  }
</style>
