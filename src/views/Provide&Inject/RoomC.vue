<script setup>
import { inject } from 'vue';

// 2.接收數據
const message = inject('message')

// 2.接收響應式數據
const num = inject('num')

// 2.接收方法
const setCount = inject('setCount-key')
</script>

<template>
    <h4>最裡層C區域</h4>
    <div class="aaa">從RoomA來的數據 : {{ message }}</div>
    <div class="aaa">從RoomA來的響應式數據 : {{ num }}</div>
    <div class="aaa">從RoomA來的方法 :
        <button @click="setCount">從頂層來的方法</button>
    </div>
</template>