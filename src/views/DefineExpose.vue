<script setup>
import { ref } from 'vue'
const name = ref('test name')

const setName = () => {
    name.value = 'new name'
}

// 編譯器宏函數之一，暴露組件內部的屬性，將子組件暴露給父組件。原本屬性與方法是封閉隱藏狀態
defineExpose({
    name,
    setName
})
</script>

<template>
    <h4>Test組件</h4>
</template>
