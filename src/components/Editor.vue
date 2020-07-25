<template>
<div>
    <el-upload class="img-uploader"
               name="img"
               :action="serverUrl"
               :accept="accept"
               :show-file-list="false"
               :on-success="uploadSuccess"
               :on-error="uploadError"
               :before-upload="beforeUpload">
    </el-upload>
    <quill-editor ref="myQuillEditor" v-model="content"
                  :options="editorOption" class="my-editor" />
     <div class="my-submit-btn">
       <el-button type="primary" @click="submit" v-text="btnMsg">
       </el-button>
     </div>

 </div>

</template>

<script>
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
  const imgServer='https://problem-ssm.oss-cn-beijing.aliyuncs.com/'
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
            if(this.BtnCode==1){

            }else if(this.BtnCode==2){
              console.log("ghiuw")
            }
          },
        // uploadImg:function(){
        //   this.api.service({
        //     url:'/img/upload',
        //     method:'post'
        //
        //   })
        // },
        uploadSuccess:function (resp,file) {
          console.log(file)
          if(resp.code==200){
            let quill=this.$refs.myQuillEditor.quill;
            console.log(quill)
            //获取光标位置
            let length=quill.getSelection().index;
            quill.insertEmbed(length,'image',imgServer+resp.url)
            quill.setSelection(length+1)
          }else{
            this.$message.error("加载失败...")
          }
          this.quillUpdateImg=false

        },
        uploadError:function () {
          if (!this.$store.isLogin) {
            this.$message.error("请登录...")
            this.$store.commit('changeLoginVisible', true);
          }
          else{
            this.$message.error('加载失败...')
          }
          this.quillUpdateImg=false;
        },
        beforeUpload:function (file) {
          this.quillUpdateImg=true
        },
        onEditorChange:function ({editor,html,text}) {
            console.log(html)
            this.content=html
        }
      },
      props: {
        'BtnCode':{
          type:Number
        }
      },
      computed:{
          btnMsg(){
            if(this.BtnCode==1){
              return '发布动态'
            }
            else if(this.BtnCode==2){
              return '评论'
            }
          }
      }

    }
</script>

<style scoped>
  .my-submit-btn{
    float: right;
    margin-top: 10px;
  }
</style>
