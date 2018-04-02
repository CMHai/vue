import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import He1 from '@/components/He1'
import He2 from '@/components/He2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
          default:HelloWorld,
          left:He1,
          right:He2
      }
    },{
      path: '/He',
      name: 'HelloWorld',
      components: {
          default:HelloWorld,
          left:He2,
          right:He1
      }
    }
  ]
})
