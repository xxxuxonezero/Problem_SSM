<template>
  <div>
    <problem-list :pageList="page.list"></problem-list>
      <el-pagination
        class="my-page"
        @current-change="handleCurrentChange"
        :background="true"
        :current-page.sync="curPage"
        :page-size="pageSize"
        :page-count="page.totalPage"
        layout="prev, pager, next, jumper"
        :total="page.totalCount">
      </el-pagination>

  </div>
</template>

<script>
  import ProblemList from "@/components/problem/ProblemList";

  export default {
    name: "Problem",
    components: {
      'problem-list': ProblemList
    },
    data() {
      return {
        page:{},
        curPage:1,
        pageSize:10
      }
    },
    methods: {
      getList() {
        let _this=this
        this.api.service({
          url: '/question',
          method: 'get',
          params: {
            curPage: _this.curPage,
            pageSize: this.pageSize,
          }
        })
          .then(resp => {
            _this.page=resp.data
            console.log(resp.data)
          })
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.curPage=val
        this.getList()
        this.$router.push({
          path:this.$route.path,
          query:{
            curPage:val
          }
        })

      }
    },

    mounted() {
      //通过路由的query传递参数，并在页面加载时获取当前页，就可以避免，每次刷新都会忘记当前页的局面
      let curPage=this.$route.query.curPage
      this.curPage=parseInt(curPage==undefined?this.curPage:curPage)
      this.getList()
    }


  }
</script>

<style scoped>
.my-page{
  margin: 0 auto 20px;
  text-align: center;
}
</style>
