<script setup>
import { ref } from 'vue'
const pageSize3 = ref(50)


</script>

<template>
    <div class="demo-pagination-block">
        <div class="p1">分頁樣式</div>
        <el-pagination v-model:current-page="currentPage3" v-model:page-size="pageSize3" background
            layout="prev, pager, next, jumper" :total="1000" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>

</template>

<style lang="scss" scoped>
.el-pagination {
    justify-content: center; //居中
    //f1oat:1eft;居左
    //f1oat:right;居右
}

// 分頁:上一頁按鈕、下一頁按鈕、其他所有按鈕
:deep(.el-pagination.is-background .btn-next),
:deep(.el-pagination.is-background .btn-prev),
:deep(.el-pagination.is-background .el-pager li:not(.is-disabled)) {
    background-color: #fff;
    border: 2px solid #ff0000;
    border-radius: 5px;
    color: #ff0000;

    &:hover {
        background-color: #fed6d6;
    }
}

// 分頁: 活動按鈕
:deep(.el-pagination.is-background .el-pager li:not(.is-disabled).is-active) {
    background-color: #ff0000;
    color: #fff;
}

// 分頁:輸入格
:deep(.el-input) {
    background-color: #fff;
    color: #ff0000;
    border: 2px solid #ff0000;
    border-radius: 5px;
}

// 分頁:文字、輸入格內文字
:deep(.el-pagination__goto),
:deep(.el-input__inner) {
    color: #ff0000;
}
</style>