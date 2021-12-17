<template>
        <div style="background-color: #e5e5e5;height: 100vh">
                <van-notice-bar wrapable :scrollable="false" :text="words" :background="bgcolor" :color="textcolor" style="margin-top: 30px"/>
        </div>
</template>
<script>
    export default {
        name: "Type2"
    }
</script>
<script setup>
        import {ref ,onMounted,onBeforeUnmount} from 'vue'
        const words = ref([]);
        const bgcolor = ref('#e5e5e5');
        const textcolor = ref('#999')
        const str = ref('第一：有打字效果，可以调节输出速度（当然后期如果可以根据音乐的高低来调整速度就是最好的）;第二：有主题，可以换羊皮纸效果或者其他换肤效果作为阅读的效果；第三' +
                '可以发布文章说说+加上配乐;第四：发布的时候可以选择多种输出效果；第五：可以滑动查看其他前面的文章文字');
        const letters = ref([]);
        // const order = ref(1);
        //开始输入的效果动画
        const  begin=()=>{
                letters.value=str.value.split("")
                for(var i=0;i<letters.value.length;i++){
                        setTimeout(write(i),i*250);
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
        onBeforeUnmount(()=>{
                console.log('销毁之前执行')
        })
</script>
<!--行字体宽度-->
<style scoped>
        .list-enter-active,
        .list-leave-active {
                transition: all 1s ease;
        }
        .list-enter-from,
        .list-leave-to {
                opacity: 0;
                transform: translateY(30px);
        }
</style>
