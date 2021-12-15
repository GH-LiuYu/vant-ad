<template>
        <van-tabbar v-model="active">
                <van-tabbar-item :icon="item.icon" :key="'tabbar' + index" v-for="(item,index) in list">{{item.name}}</van-tabbar-item>
        </van-tabbar>
</template>
<script>
    export default {
        name: "NavBar"
    }
</script>
<script setup>
    import { ref } from 'vue';
    import { list } from '../config/navbar.js';
    const active = ref(0);
</script>
<style scoped>

</style>
