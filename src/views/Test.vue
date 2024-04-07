<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Swal from 'sweetalert2';

// 獲取列表
const list = ref([])
const getlist = async () => {
    // 調用接口
    const response = await axios.get('http://localhost:8080/api/quiz/search')

    // 賦值給list
    list.value = response.data
}

onMounted(() => {
    getlist()
})

// 2.進行刪除
const onDelete = async (id) => {
    // 獲得id
    console.log(id)
    // 調用接口
    await axios.post(`http://localhost:8080/api/quiz/deleteQuestionnaire`, { qnIdList: [id] })
    // 刷新列表
    getlist()
}
// 1.確認是否刪除彈窗
const showDeleteConfirm = (id, title) => {
    Swal.fire({
        title: '確定要刪除嗎?',
        text: `ID : ${id} 標題 : ${title}`, // 將 id 顯示在彈窗內容中
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: '是',
        cancelButtonText: '否'
    }).then((result) => {         //點擊確認按鈕後執行刪除方法
        if (result.isConfirmed) {
            onDelete(id);
        }
    })
}

</script>

<template>
    <el-table class="main" :data="list.quizVo">
        <el-table-column label="ID" prop="questionnaire.id"></el-table-column>
        <el-table-column label="標題" prop="questionnaire.title"></el-table-column>
        <el-table-column label="描述" prop="questionnaire.description"></el-table-column>
        <el-table-column label="開始時間" prop="questionnaire.startDate"></el-table-column>
        <el-table-column label="結束時間" prop="questionnaire.endDate"></el-table-column>
        <el-table-column label="刪除" #default="{ row }">
            <el-button type="danger" @click="showDeleteConfirm(row.questionnaire.id , row.questionnaire.title)" link>删除</el-button>
        </el-table-column>
    </el-table>
    <!-- <table>
        <tr>
            <th>ID</th>
            <th>標題</th>
            <th>描述</th>
            <th>開始</th>
            <th>結束</th>
            <th>刪除</th>
        </tr>
        <tr v-for="item in list.quizVo" :key="item.questionnaire.id">
            <td>{{ item.questionnaire.id }}</td>
            <td>{{ item.questionnaire.title }}</td>
            <td>{{ item.questionnaire.description }}</td>
            <td>{{ item.questionnaire.startDate }}</td>
            <td>{{ item.questionnaire.endDate }}</td>
            <td>
                <button @click="showDeleteConfirm(item.questionnaire.id, item.questionnaire.title)">刪除</button>
            </td>
        </tr>
    </table> -->

</template>

<style lang="scss" scoped>
$maincolor: #0d4138;

.main {
    width: 1000px;
    margin: 100px auto;
}

</style>