// 導入一個方法 defineStore
import axios  from "axios"; 
import { defineStore } from "pinia";
import {computed, ref} from 'vue';
const API_URL = 'http://geek.itheima.net/v1_0/channels'
export const useCounterStore = defineStore('counter' , () => {
    // 定義數據(state)
    const count = ref(0)

    // 定義修改數據的方法(異步+同步)
    const increment = () => {
    count.value++
    }

    // 定義 getter 
    const doubleCount = computed(()=>count.value *2)

    // 定義異步 action 
    const list = ref([])
    const getList = async () => {
        const res = await axios.get(API_URL)
        list.value = res.data.data.channels
    }

    // 以對象的方式 return 供組件使用
    return{
        count,
        doubleCount,
        increment,
        list,
        getList
    }
})