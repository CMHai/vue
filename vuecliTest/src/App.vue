<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>这是主页面，修改内容在标签router-view内</p>
    <button @click="goback">后退</button>
    <button @click="goGo">前进</button>
    <button @click="goHome">返回首页</button>
    <div>
        <router-link to="/">首页</router-link>|
        <router-link to="/Hi">HI页面</router-link>|
        <router-link :to="{name:'hi1name',params:{username:'cminghai',id:'888'}}">HI1页面</router-link>|
        <router-link to="/Hi2/198/cminghai">HI2页面</router-link>|
        <router-link to="/gohome">重新定向首页</router-link>|
        <router-link to="/gohi2/111/cminghai">重新定向HI2首页</router-link>
        <router-link to="/gohi">alias重新定向HI页面</router-link>
    </div>
    <transition name="fade" mode="out-in">
        <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goback(){
      this.$router.go(-1);
    },
    goGo(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity 0.5s;
}
.fade-leave-active{
  opacity: 0;
  transition:opactiy 0.5s;
}
</style>
