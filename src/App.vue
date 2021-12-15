<template>
  <van-search
          v-model="value"
          shape="round"
          background="#7786cd"
          placeholder="请输入搜索关键词"
  />


<!--  <van-swipe :autoplay="3000" lazy-render style="padding-top: 5px;">-->
<!--    <van-swipe-item v-for="image in images" :key="image">-->
<!--      <img :src="image" style=" width: 100%;-->
<!--      display: block;"/>-->
<!--    </van-swipe-item>-->
<!--  </van-swipe>-->
  <div style="display: block;">
  <vue-typed-js :strings="['First text', 'Second Text']">
    <h1 class="typing"></h1>
  </vue-typed-js>
    </div>
  <nav-bar></nav-bar>
</template>
<script>
export default {
  name: 'App',
}
</script>
<script setup>
  //引入导航栏
  import NavBar from './components/NavBar.vue'
  import {ref ,onMounted} from 'vue'
  const value = ref('11');
  // const images = ref([
  //   'https://img.yzcdn.cn/vant/apple-1.jpg',
  //   'https://img.yzcdn.cn/vant/apple-2.jpg',
  // ]);
  onMounted(()=>{
  })
</script>
<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>
