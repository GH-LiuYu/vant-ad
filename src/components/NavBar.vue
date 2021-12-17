<template>
        <van-tabbar v-model="active" @change="onChange" route>
                <van-tabbar-item :icon="item.icon" replace :to="item.path" :key="'tabbar' + index" v-for="(item,index) in list">{{item.name}}</van-tabbar-item>
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
    // import { Notify } from 'vant';
    const active = ref(0);
    const onChange =(index)=>{
            // Notify('通知内容');
    }
</script>
<style scoped>

</style>
