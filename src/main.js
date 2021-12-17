import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"; //路由
import { Tabbar, TabbarItem,Lazyload,Swipe, SwipeItem,Search,NoticeBar,TreeSelect,Grid, GridItem,Empty} from 'vant';
const app = createApp(App);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Swipe);
app.use(SwipeItem);
app.use(Search);
app.use(Lazyload);
app.use(NoticeBar);
app.use(TreeSelect);
app.use(Grid);
app.use(GridItem);
app.use(Empty);
app.use(Lazyload, {
    lazyComponent: true,
});
app.use(router)
//其他引入的组件都需要在#app前面引入，不然渲染顺序有问题
app.mount('#app')

