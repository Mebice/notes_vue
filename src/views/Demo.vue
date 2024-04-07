<!-- ref響應式數據 + computed計算屬性 + watch監聽單個數據 -->
<!-- <script setup>
import { ref,watch } from 'vue'  //以函數調用生成響應式數據
import { computed } from 'vue'  //計算屬性


const count = ref(0)
const setCount = () => {
    count.value++
}
//監聽單個數據
watch(count,(newVal,oldVal) =>{
    console.log('count的變化',newVal,,oldVal)
})


const list = ref([1, 2, 3, 4, 5, 6])
const computedList = computed(() => {
    // return計算後的值，變量接收
    return list.value.filter(item => item > 2)
})
setTimeout(() => { //六秒後推入新數組
    list.value.push(9,10)
},6000)

</script>

<template>
    <h1>Pwd</h1>
    <button @click="setCount">{{ count }}</button>
    <div>原始響應式數組 : {{ list }}</div>
    <div>計算屬性數組 : {{ computedList }}</div>

</template> -->

<!-- watch監聽多個數據 -->
<!-- <script setup>
import {ref,watch} from 'vue'

const count = ref(0)
const changeCount = ()=> {
    count.value++
}

const name = ref('花花')
const changeName = ()=> {
    name.value = ('草草')
}

//監聽多個數據
watch([count,name],([newCount,newName],[oldCount,oldName]) => {
    console.log('count或name的變化',[newCount,newName],[oldCount,oldName])
})
</script>

<template>
<button @click="changeCount">{{count}}</button>
<button @click="changeName">{{name}}</button>
</template> -->

<!-- watch & immediate 立即執行 -->
<!-- <script setup>
import {ref , watch} from 'vue'

const count = ref(0)
const setCount = () =>{
    count.value++
}

watch(count, () => {
    console.log('count的變化')
},{
    immediate : true
})
</script>

<template>
    <button @click="setCount">{{count}}</button>
</template> -->

<!-- watch & deep 深度監聽自取名變數 deep損耗性能盡量不開啟-->
<!-- <script setup>
import { ref,watch} from 'vue'

const state = ref({ count: 0 })
const changeStateByCount = () => {
    state.value.count++
}
watch( state, () => {
console.log('state的變化')
},{
    deep:true
})
</script>

<template>
    <div>
        {{ state.count }}
        <button @click="changeStateByCount">透過count</button>
    </div>
</template> -->

<!-- watch 精確監聽某個或多個屬性 & watchEffect 精確監聽多屬性 -->
<!-- <script setup>
import { ref, watch, watchEffect } from 'vue'
const state = ref({
    name: 'momo',
    age: 20,
    birth: '1990.01.01'
})

const changeName = () => {
    // 修改name
    state.value.name = 'lisa'
}
const changeAge = () => {
    // 修改age
    state.value.age = 25
}
const changeBirth = () => {
    // 修改birth
    state.value.birth = '1995.04.01'
}

// watch(   //監聽某個
//     () => state.value.age,
//     () => {
//         console.log('age的變化',state.value.age)
// })

watch(   //監聽多個，顯式地監聽多個屬性，並且想要根據具體條件來啟用或禁用監聽
    [
        () => state.value.name,
        () => state.value.age,
    ],
    () => {
        console.log('name和age的變化', state.value.name, state.value.age)
    })

// watchEffect( //監聽多個，僅需監聽依賴的變化，並且不需要額外的控制邏輯
//     () => {
//         console.log('name和age的變化',state.value.name, state.value.age)
// })
</script>

<template>
    <div>當前name : {{ state.name }}</div>
    <div>當前age : {{ state.age }}</div>
    <div>當前birth : {{ state.birth }}</div>

    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
    <button @click="changeBirth">修改birth</button>
</template> -->

<!-- 生命週期的使用 -->
<!-- <script setup>
import { onMounted } from 'vue';

//不敢更動或不想更動已有的邏輯時
onMounted(()=>{  //已有的邏輯
    console.log('加載完成1')
})
onMounted(()=>{  //補充邏輯
    console.log('加載完成2')
})
</script> -->

<!-- 父傳子組件 -->
<!-- <script setup>
import Son from '../components/Son.vue'
import {ref} from 'vue'
const count = ref (50)
setTimeout(()=>{
    count.value = 100
},3000)
const info = {
    name: 'momo',
    age:20
}
const list = ['A','B','C','D']
</script>

<template>
    <div class="bgArea">
        <div class="father">
            <h1>父組件</h1>
            //1.綁屬性
            <Son message="father message" :count="count" :info :list/>
        </div>
    </div>
</template> -->

<!-- 子傳父組件 -->
<!-- <script setup>
import Son from '../components/Son.vue'

const getMessage = (msg) => {
console.log(msg)
}

</script>

<template>
    <div class="bgArea">
        <div class="father">
            <h2>父組件</h2>
            綁定事件
            <Son @get-message = "getMessage" />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.bgArea {
    display: flex;
    justify-content: center;

    .father {
        width: 500px;
        height: 500px;
        border: 2px solid black;
    }

}
</style> -->

<!-- 獲取模板 需加載完畢後才可獲取 -->
<!-- <script setup>
import Test from '../views/Test.vue'
import {onMounted,ref} from 'vue'
// 1.調用ref函數 -> ref對象
const h1Ref = ref(null) 
const testRef = ref(null)
//加載完畢後才獲取
onMounted(()=>{
    console.log(h1Ref.value)
    console.log(testRef.value)
})
</script>

<template>
    通過ref標誌綁定ref對象 
<h1 ref="h1Ref">dom標籤就是我h1</h1>
<Test ref="testRef"/>
</template> -->

<!-- pinna(集中狀態管理工具)-counter(自命名)/getter(computed計算屬性)/action(同步+異步)的使用 -->
<script setup>
// 1.導入 use 打頭的方法
import { useCounterStore } from '@/stores/counter'
import { onMounted } from 'vue';
// 2.執行方法得到store實例對象
const counterStore = useCounterStore()
console.log(counterStore)

onMounted(() => {
    counterStore.getList()
})
</script>

<template>
    <h1>pinna</h1>
    <div class="" @click="counterStore.increment">
        <button>{{ counterStore.count }}</button>
        <span> + {{ counterStore.doubleCount }}</span>
    </div>

    <li>
        <ul v-for="item in counterStore.list" :key="item.id">{{ item.id }}:{{ item.name }}</ul>
    </li>
</template>
