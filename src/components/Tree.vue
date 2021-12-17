<template>
    <van-tree-select
            v-model:active-id="activeId"
            v-model:main-active-index="activeIndex"
            :items="items"
    />
</template>

<script>
    export default {
        name: "Tree"
    }
</script>
<script setup>
    import {ref} from 'vue'
    const activeId = ref(1);
    const activeIndex = ref(0);
    const items = ref([
        {
            text: '浙江',
            children: [
                { text: '杭州', id: 1 },
                { text: '温州', id: 2 },
            ],
        },
        {
            text: '江苏',
            children: [
                { text: '南京', id: 5 },
                { text: '无锡', id: 6 },
            ],
        },
    ]);
</script>

<style scoped>

</style>
