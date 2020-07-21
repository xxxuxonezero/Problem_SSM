<template>
  <div class="my-box">
    <div class="my-box-top clearfix" style="overflow: auto;">
      <a href="" class="left">
        <el-avatar shape="square" :size="size" :src="squareUrl"></el-avatar>
      </a>
      <div class="my-box-content">
        <div class="my-box-content-info">
          <span class="my-info">name</span>
          <span class="my-info right">4分钟前</span>
        </div>
        <div class="content">
          <!--              <span>-->
          1.export与export default均可用于导出常量、函数、文件、模块等
          2.你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用
          3.在一个文件或模块中，export、import可以有多个，export default仅有一个
          4.通过export方式导出，在导入时要加{ }，export default则不需要

          作者：开车去环游世界
          链接：https://www.jianshu.com/p/edaf43e9384f
          来源：简书
          著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
          　　export 用来导出模块，Vue 的单文件组件通常需要导出一个对象，这个对象是 Vue 实例的选项对象，以便于在其它地方可以使用 import 引入。而 new Vue() 相当于一个构造函数，在入口文件
          main.js 构造根组件的同时，如果根组件还包含其它子组件，那么 Vue 会通过引入的选项对象构造其对应的 Vue 实例，最终形成一棵组件树。

          　　export 和export default 的区别在于：export 可以导出多个命名模块，例如：
          port与export default均可用于导出常量、函数、文件、模块等 2.你可
          以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用 3.在一个文件或模块中，export、import可以有多个，export default仅有一个
          4.通过export方式导出，在导入时要加{ }，export default则不需要 作者：开车去环游世界 链接：https://www.jianshu.com/p/edaf43e9384f 来源：简书
          著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 　　export 用来导出模块，Vue 的单文件组件通常需要导出一个对象，这个对象是 Vue 实例的选项对象，以便于在其它地方可以使用 import
          引入。而 new Vue() 相当于一个构造函数，在入口文件 main.js 构造根组件的同时，如果根组件还包含其它子组件，那么 Vue 会通过引入的选项对象构造其对应的 Vue 实例，最终形成一棵组件树。
          　　export 和export default 的区别在于：export 可以导出多个命名模块，例如：
          <!--              </span>-->
        </div>
      </div>
    </div>
    <div class="my-box-bottom">
      <a href=""><i class="iconfont icon-zhuanfa"></i><span></span></a>
      <a href=""><i class="iconfont icon-pinglun"></i><span></span></a>
      <a href=""><i class="iconfont icon-dianzan"></i><span></span></a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TrendItem",
    data() {
      return {
        squareUrl: '',
        size: 'medium',
        content: ''
      }
    },
  }
</script>

<style scoped>
  .my-box-content {
    margin-left: 50px;
  }

  .my-box-top {
    /*height: 160px;*/
    border-bottom: 1px solid #E4E7ED;
  }

  .my-box-bottom {
    height: 30px;
    padding-top: 5px;
    line-height: 25px;
    text-align: center;
  }

  .my-box-bottom > a {
    width: 33%;
    display: inline-block;
    border-right: 1px solid #EBEEF5;
  }

  .my-box-bottom > a:last-child {
    border-right: none;
  }
</style>
