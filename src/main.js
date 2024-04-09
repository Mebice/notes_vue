import './assets/main.scss'
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

// 导入 ElementPlus 和 样式文件
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount('#app')

