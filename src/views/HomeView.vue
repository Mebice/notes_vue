<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goProvideInject = () =>{
    router.push('RoomA')
}
const goDemo = () =>{
    router.push('Demo')
}
const goDefineExpose = () =>{
    router.push('DefineExpose')
}
const goTest = () =>{
    router.push('Test')
}
</script>

<template>
    <h1>Notes</h1>
    <button @click="goDemo">Demo</button>
    <button @click="goProvideInject">Provide&Inject</button>
    <button @click="goDefineExpose">DefineExpose</button>
    <button @click="goTest">Test</button>
</template>

<style lang="scss" scoped>
h1{
    color: #c92a2a;
}
</style>
