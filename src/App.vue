<template>
  <div style="background-color: #e5e5e5;">
    <van-notice-bar wrapable :scrollable="false" left-icon="volume-o" :text="words" style="background-color: #e5e5e5;"/>
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
  const words = ref([]);
  const str = ref('第一：有打字效果，可以调节输出速度（当然后期如果可以根据音乐的高低来调整速度就是最好的）;第二：有主题，可以换羊皮纸效果或者其他换肤效果作为阅读的效果；第三' +
          '可以发布文章说说+加上配乐;第四：发布的时候可以选择多种输出效果；第五：可以滑动查看其他前面的文章文字');
  const letters = ref([]);
  // const order = ref(1);
  //开始输入的效果动画
  const  begin=()=>{
    letters.value=str.value.split("")
    console.log(letters.value)
    for(var i=0;i<letters.value.length;i++){
      setTimeout(write(i),i*200);
    }
  }
  //输入字母
  const write=(i)=>{
    return ()=>{
      let L=letters.value.length;
      words.value.push(letters.value[i]);
      /*如果输入完毕，在2s后开始删除*/
      if(i==L-1){
        setTimeout(function(){
          // back();
        },2000);
      }
    }
  }
  //开始删除的效果动画
  // const back=()=>{
  //   let L=letters.value.length;
  //   for(var i=0;i<L;i++){
  //     setTimeout(wipe(i),i*50);
  //   }
  // }
  //擦掉(删除)字母
  // const wipe=(i)=>{
  //   return ()=>{
  //     words.value.pop(letters.value[i]);
  //     /*如果删除完毕，在300ms后开始输入*/
  //     if(words.value.length==0){
  //       order.value++;
  //       setTimeout(function(){
  //         begin();
  //       },300);
  //
  //     }
  //   }
  // }
  onMounted(()=>{
    begin();
  })

</script>
<style>
</style>
