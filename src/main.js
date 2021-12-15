import { createApp } from 'vue'
import App from './App.vue'
import VueTypedJs from 'vue-typed-js'
import { Tabbar, TabbarItem,Lazyload,Swipe, SwipeItem,Search  } from 'vant';
const app = createApp(App);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Swipe);
app.use(SwipeItem);
app.use(Search);
app.use(Lazyload);
app.use(VueTypedJs)
app.use(Lazyload, {
    lazyComponent: true,
});
//其他引入的组件都需要在#app前面引入，不然渲染顺序有问题
app.mount('#app')

