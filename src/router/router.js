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
    },
    {
      path:'/trend/:id',
      component:()=>import('@/views/trend/TrendDetail')
    },
    {
      path:'/problem',
      redirect: '/problem/problemground'
    },
    {
      path: '/problem/problemground',
      component:()=>import('@/views/problem/Problem')
    },
    {
      path: '/problem/problemground/:id',
      component:()=>import('@/views/problem/ProblemDetail')
    },
    {
      path:'/problem/practice',
      component:()=>import('@/views/problem/Practice')
    }

  ]
})

export default router
