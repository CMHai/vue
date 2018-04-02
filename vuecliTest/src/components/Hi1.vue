<template>
  <div class="hello">
    <h1>{{msg}}</h1>
      <p>通过router-link标签中的to传参:{{$route.params.username}}-{{$route.params.id}}</p> 
  </div>
</template>

<script>
export default {
  name: 'HIname',
  data () {
    return {
      msg: '这是Hi1页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* div{
  box-shadow: 1px 1px 1px #ddd
} */
</style>
