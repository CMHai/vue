import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HIcom from '@/components/Hi'
import HIcom1 from '@/components/Hi1'
import HIcom2 from '@/components/Hi2'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',//history去除#号，默认hash
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/Hi',
      component: HIcom,
      children:[{
        path: '/',
        name: 'name参数',
        component: HIcom
      }]
    },{
      path: '/hi1', 
      name:'hi1name',
      component: HIcom1
    },{
      path: '/Hi2/:newsId(\\d+)/:newsTitle',//添加正则\\d+
      component: HIcom2,
      //在路由进入前的钩子函数，另一种方式写在模板中，在模板中可以写beforeRouteLeave：在路由离开前的钩子函数。
      // beforeEnter:(to,form,next)=>{ 
      //   console.log('我进入了模板');
      //   console.log(to); //参数，对象
      //   console.log(form);//路径，对象
      //   next();//让页面进行跳转，常用的有next(true)和next(false)和next(指定路由)
      // }
    },{
      path: '/gohome',
      redirect:'/'
    },{
      path: '/gohi2/:newsId(\\d+)/:newsTitle',//添加正则\\d+
      redirect:'/Hi2/:newsId(\\d+)/:newsTitle'
    },{
      path: '/hi', 
      component:HIcom,
      alias:'/gohi'
    },{
      path: '*', 
      component:Error
    }
  ]
})
