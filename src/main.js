//vue3写法加载vue
import {createApp} from 'vue'
import App from './App.vue'
//加载菜单路由js
import router from './router'
//猜测是本地缓存js
import store from './store'
//加载ElementPlus页面框架
import installElementPlus from './plugins/element'
//加载图标样式
import './assets/css/icon.css'
//创建app
const app = createApp(App)
//调用默认方法来为 页面框架加载插件
installElementPlus(app)

//引入全局组件网页图标
import ThisIco from "./components/ThisIco.vue" //网站图片
import Menu from "./components/Menu.vue"       //菜单
import MyIco from "./components/MyIco.vue"       //头像

app
    //加载插件
   .use(store)
   .use(router)
    //全局组件    name 组件名
    .component("vThisIco",ThisIco)
    .component("vMenu",Menu)
    .component("vMyIco",MyIco)
    //绑定到app下
   .mount('#app');



//引入公共插件
import refresh from "./utils/refresh" //刷新页面

app.mixin({
    methods: {
        //强制刷新页面
        $refresh: refresh,
    }
})
