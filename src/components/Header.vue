<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isDropdownVisible = ref(false);

const showDropdown = () => {
    isDropdownVisible.value = true;
};

const hideDropdown = () => {
    isDropdownVisible.value = false;
};
</script>

<template>
    <div class="headershow">
        <RouterLink class="routerItem" to="/"><i class="fa-solid fa-house"></i></RouterLink>
        <RouterLink class="routerItem" to="/Test">Test</RouterLink>
        <RouterLink class="routerItem" to="ElementPlusStyle">ElementPlusStyle</RouterLink>
        <div class="dropdown" @mouseenter="showDropdown" @mouseleave="hideDropdown">
            <span class="routerItem" :class="{ 'routerItem': true, 'active': isDropdownVisible }">Learn 
                <i class="fa-solid fa-chevron-down"
                    :class="{ 'fa-chevron-down': true, 'active2': isDropdownVisible }">
                </i>
            </span>
            <div v-if="isDropdownVisible" class="dropdown-content">
                <RouterLink class="routerItem" to="/Demo">Demo</RouterLink>
                <RouterLink class="routerItem" to="/RoomA">Provide&Inject</RouterLink>
                <RouterLink class="routerItem" to="/DefineExpose">DefineExpose</RouterLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.headershow {
    height: 40px;
    background-color: $main;
    display: flex;
    align-items: center;
    justify-content: space-around;

    .routerItem {
        color: #ffffff;
        text-decoration: none;

        &:hover {
            color: rgb(0, 0, 0)
        }
    }


    .dropdown {  // 下拉區域
        display: flex;
        align-items: center;
        height: 40px;
        position: relative;
        // background-color: #31dd3a;

        &:hover {
            cursor: pointer;
        }
    }

    .dropdown-content { // 下拉選單
        display: none;
        position: absolute;
        top: 40px;
        left: -45px;
        background-color: #f9f9f9;
        min-width: 100px;
        padding: 10px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        z-index: 1;

        .routerItem { // 選單中的選項
            text-decoration: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            color: $main;

            &:hover {
                background-color: #f1f1f1;
                color: #000000;
            }
        }
    }

    .dropdown:hover .dropdown-content {  // 出現選單
        display: block;
    }

    .active {  // 展開時維持鏈接顏色
        color: #000000;
    }
    .active2 {  // 展開時讓圖標改變方向
        transform: rotate(180deg); /* 将图标旋转180度 */
    }
}
</style>