<template>
  <router-view></router-view>
  <nav-bar></nav-bar>
</template>
<script>
export default {
  name: 'App',
}
</script>
<script setup>
  //引入导航栏
  import NavBar from './components/NavBar.vue';
</script>
<style>
</style>
