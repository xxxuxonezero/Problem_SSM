import VueRouter from "vue-router";
import Vue from "vue"

Vue.use(VueRouter);

const router=new VueRouter({
  routes:[
    {
      path:'',
      redirect:'/trend'
    },
    {
      path:'/trend',
      name:'trend',
      component:()=>import('@/views/trend/Trend'),
      meta:{
        title:'首页'
      }
    },
    {
      path:'/trend/:id',
      component:()=>import('@/views/trend/TrendDetail'),
      meta: {
        title:'动态详情'
      }
    },
    {
      path:'/problem',
      redirect: '/problem/problemground',
    },
    {
      path: '/problem/problemground',
      component:()=>import('@/views/problem/Problem'),
      meta:{
        title:'试题广场'
      }
    },
    {
      path: '/problem/problemground/:id',
      component:()=>import('@/views/problem/ProblemDetail'),
      meta: {
        title:'试题详情'
      }
    },
    {
      path:'/problem/practice',
      component:()=>import('@/views/problem/Practice')
    },
    {
      path: '/problem/add',
      component:()=>import('@/views/problem/Add'),
      meta:{
        title:'添加试题'
      }
    }

  ],
})

router.beforeEach((to, from, next) => {
  document.title=to.matched[0].meta.title
  next()
})



export default router
