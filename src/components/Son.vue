<!-- 父傳子組件 -->
<!-- <script setup>
// 2.defineProps接收數據
const props = defineProps({
    //參數:類型
    message: String,
    count: Number,
    info:Object,
    list:Array,
})
console.log(props)
</script>

<template>
    <div class="bgArea">
        <div class="son">
            <h3>子組件</h3>
            <div>父組件傳入的數據 : {{  message + count + info.name + info.age + '歲' + list[2]}}</div>
        </div>
    </div>
</template> -->

<!-- 子傳父組件 -->
<script setup>
// 2.透過defineEmits() -> emit(this.$emits)
const emit = defineEmits(['get-message'])
const sendMsg = () => {
    emit('get-message', '父接收到 : very good!')
}
</script>

<template>
<button @click="sendMsg">點擊觸發事件</button>
</template>

<style lang="scss" scoped>
.bgArea {
    display: flex;
    justify-content: center;

    .son {
        width: 300px;
        height: 300px;
        border: 2px solid black;
    }
}
</style>