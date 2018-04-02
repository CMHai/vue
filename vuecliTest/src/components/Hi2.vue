<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <div>通过url传值</div> 
     <p>新闻ID：{{ $route.params.newsId}}<br>新闻标题： {{$route.params.newsTitle}}</p>
  </div>
</template>

<script>
export default {
  name: 'HIname',
  data () {
    return {
      msg: '这是Hi2页面'
    }
  },
  //钩子函数，也可写在路由配置文件index中
  beforeRouteEnter:(to,from,next)=>{
    console.log("准备进入路由模板");
    next();
  },
  beforeRouteLeave: (to, from, next) => {
    console.log("准备离开路由模板");
    next();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div{
  box-shadow: 1px 1px 1px #ddd
} */
</style>
