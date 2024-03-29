// import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
// import "@/common/permission.js"
import router from './router'
import ElementPlus from 'element-plus'
import store from "@/store"
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import vuei18n from "./localization/locales"
import {createMetaManager } from 'vue-meta'
import "@/styles/index.scss"
// App.router = router
const app = createApp(App)


for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(vuei18n)
app.use(createMetaManager())
// router.start(app, '#app')
app.mount('#app')


