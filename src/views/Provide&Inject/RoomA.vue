<script setup>
import { provide,ref } from 'vue';
import RoomB from '../Provide&Inject/RoomB.vue'
import RoomC from '../Provide&Inject/RoomC.vue'

// 1.最外層提供數據
provide('message','How are you? I am fine,and you?')


// 1.傳遞響應式數據
const count = ref(0)
provide('num',count)

setTimeout(()=>{
    count.value = 100
},3000)

// 1.傳遞方法
const setCount = () => {
    count.value++
}
provide('setCount-key',setCount)
</script>

<template>
<h2>最外層A區域</h2>
<RoomB />
<RoomC />
</template>