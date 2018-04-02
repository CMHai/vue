<template>
  <div class="hello">
    <h1>{{msg}} </h1>
    <p>通过name穿传参：{{$route.name}} </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'HIname',
  data () {
    return {
      msg: '这是Hi页面'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  box-shadow: -1px 0px 30px #ddd
}
</style>
