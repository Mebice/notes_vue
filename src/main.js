import './assets/main.scss'
import 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { createPinia } from 'pinia'

// 导入 ElementPlus 和 样式文件
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"

import axios from 'axios';

import MockAdapter from 'axios-mock-adapter';
import { mockData } from './mock/mockData';
const mock = new MockAdapter(axios);



const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)
app.use(ElementPlus)

app.mount('#app')


mock.onGet('/api/data').reply(200, mockData);

// 模拟删除请求
// mock.onDelete('/del/:id').reply(200, { message: 'Delete operation successful' }); // 模拟删除成功的响应
