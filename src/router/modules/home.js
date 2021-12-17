import Tree from '../../components/Tree.vue'
import Type2 from '../../components/Type2.vue'
import Grid from '../../components/Grid.vue'
import Search from '../../components/Search.vue'
export default [
    { path: '', component: Type2},
    { path: '/home', component: Tree},
    { path: '/grid', component: Grid},
    { path: '/search', component: Search},
]
